import pickle
import numpy as np
import pandas as pd

def roundup(x):
    return int(round(x / 1000000)) * 1000000



def get_Star_power(actors):
    pin = open("prediction/stardict.pickle","rb")
    stardict = pickle.load(pin)
    starClass = [0,541.0,10525976.0,24710235.0,34476274.0,44104240.0,54270860.0,68214803.0,85686554.0,
             111928510.0,769905856.0]
    n = 0
    avg = 0
    for a in actors:
        if a in stardict.keys():
            n += 1
            avg += stardict[a]
    if(n != 0):
        avg /= n
    for i in range(len(starClass)):
        if(avg<starClass[i]):
            return i
    return 10

def getBocsRate(pred):
    if pred<5000000:
        return 1
    elif pred>=5000000 and pred<20000000:
        return 2
    elif pred>=20000000 and pred<50000000:
        return 3
    elif pred>=50000000 and pred<100000000:
        return 4
    else:
        return 5

def get_Prediction(result):
    print(result)
    actors = []
    budget = int(result['Budget'][0])
    nsc = int(result['Number of Screens'][0])
    avg = float(result['Average Rating'][0])
    actors.append(result["Actor 1's Name"][0])
    genres = result['Genres']
    for i in range(2,5):
        key = "Actor "+str(i)+"'s Name"
        if result[key][0] != '':
            actors.append(result[key][0])

    # Calculate Star Power
    sp = get_Star_power(actors)

    # Convert genres to dummy
    gb = {}
    for k in ['Drama', 'Animation', 'Comedy', 'Adventure', 'Romance', 'Horror',
        'Thriller', 'Fantasy', 'Mystery', 'Action', 'Sci-Fi', 'Crime','Other']:
        gb[k] = 0
    for i in range(len(genres)):
        if genres[i] in ['Drama', 'Animation', 'Comedy', 'Adventure', 'Romance', 'Horror',
            'Thriller', 'Fantasy', 'Mystery', 'Action', 'Sci-Fi', 'Crime','Other']:
            gb[genres[i]] = 1
        else:
            gb['Other'] = 1
    print(gb)
    gb = list(gb.values())

    # Convert certification to dummy
    cb = {}
    for k in ['PG', 'PG-13', 'R']:
        cb[k] = 0
    cb[result['MPAA Certification'][0]] = 1
    print(cb)
    cb = list(cb.values())

    print(sp)
    print(gb)
    print(cb)

    filename = 'prediction/rfr_model.sav'
    model = pickle.load(open(filename, 'rb'))

    pred = model.predict([[budget,sp,avg,nsc,gb[0],gb[1],gb[2],gb[3],gb[4],gb[5],gb[6],gb[7],gb[8],
        gb[9],gb[10],gb[11],gb[12],cb[0],cb[1],cb[2] ]])[0]

    rate = getBocsRate(pred)

    return (roundup(pred),rate)
