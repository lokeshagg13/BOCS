```markdown
# Bocs: A Box Office Prediction Algorithm

Bocs is a machine learning-based project designed to predict the box office performance of movies before release. Using a variety of data sources and advanced algorithms, Bocs helps stakeholders make informed decisions about marketing, production, and distribution strategies.

## Features
- Predicts a movie's opening weekend and total box office gross.
- Utilizes a wide range of features such as cast, director, genre, budget, release date, and promotional data.
- Incorporates advanced feature engineering to handle text and numerical data.
- Implements state-of-the-art machine learning models for accurate predictions.

## Dataset
The project utilizes datasets sourced from:
- IMDB: Movie details including cast, director, and ratings.
- TMDb: Genre, runtime, and user reviews.
- Box Office Mojo: Historical box office data.
- Social media platforms: Hype and sentiment analysis.

## Models Used
- Linear Regression
- Random Forest
- XGBoost
- Neural Networks (for handling complex interactions)

## Key Techniques
- **Feature Engineering**: Extracted sentiment scores from reviews, performed one-hot encoding for categorical variables, and engineered features like star power and director popularity.
- **Data Preprocessing**: Handled missing data, scaled numerical features, and tokenized textual data.
- **Model Optimization**: Used GridSearchCV and RandomizedSearchCV for hyperparameter tuning.
- **Evaluation Metrics**: Evaluated models using RMSE, MAE, and R2-score for robust performance analysis.

## Results
- **Best Performing Model**: Random Forest with RMSE of 12.3M and R2-score of 0.87.
- The algorithm identifies significant predictors such as budget, marketing expenditure, and genre popularity, providing actionable insights.

## Future Enhancements
- Integrate real-time social media data for dynamic predictions.
- Expand the dataset to include international releases.
- Develop a web-based interface for easier access and visualization.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
