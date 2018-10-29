from flask import Flask, render_template, request
from prediction.predict import *
import os
import sqlite3 as sq

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/feed')
def feed():
    return render_template('feed.html')

@app.route('/boc')
def boc():
    return render_template('boc.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/mid',methods=['POST','GET'])
def mid():
    if request.method == 'POST':
        title = request.form['title']
        print(title)
        conn = sq.connect('ratings.db')
        conn.row_factory = sq.Row
        cur = conn.cursor()
        cur.execute('Select * from movie where Title = (?)',(title,))
        rows = cur.fetchall()
        print(rows[0]['Title'])
        conn.close()
        if(len(rows)>0):
            return render_template('feedr.html',rows = rows[0])
        else:
            return render_template('result.html',msg = 'Movie Name not found')

@app.route('/rate',methods=['POST','GET'])
def rate():

    if request.method == 'POST':
        try:
            mid = request.form['mid']
            name = request.form['un']
            email = request.form['email']
            age = request.form['age']
            country = request.form['country']
            rate = request.form['rate']
            review = request.form['review']

            with sq.connect('ratings.db') as conn:
                cur = conn.cursor()
                cur.execute('INSERT INTO Rate (Name,Email,Age,Country,ID,UR,Review) VALUES (?,?,?,?,?,?,?)',(name,email,age,country,mid,rate,review))
                conn.commit()
                msg = 'Your Ratings have been added successfully'
        except:
            conn.rollback()
            msg = "Sorry !!! Error while adding your Rating"
        finally:
            return render_template('result.html',msg = msg)

def concur(b):
    b = b[::-1]
    bc = [b[i:i+3] for i in range(0, len(b), 3)]
    bc = ','.join(bc)
    bc = bc[::-1]
    return bc

@app.route('/bocp',methods = ['GET','POST'])
def bocp():
    if request.method == 'POST':
        result = request.form
        result = dict(result)
        (bocs_pred,bocs_rate) = get_Prediction(result)
        print(bocs_pred,' ',bocs_rate)
        for i in result.keys():
            if(i == 'Genres'):
                result[i] = ','.join(result[i])
            else:
                result[i] = result[i][0]
            if(result[i] == ''):
                result[i] = '--'
        pred = '$ ' + concur(str(bocs_pred))
        result['Budget'] = '$ '+ concur(str(result['Budget']))
        brate = bocs_rate
        del result['Submit']
        return render_template('bocp.html',result = result,pred = pred,brate = brate)


@app.context_processor
def override_url_for():
    """
    Generate a new token on every request to prevent the browser from
    caching static files.
    """
    return dict(url_for=dated_url_for)


def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path,
                                     endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)

if __name__ == '__main__':
    app.run(debug=True)
