![Example Image](./my-react-app/public/mainpage.png)

# livability

<img src="https://github.com/user-attachments/assets/dbef974d-4888-4c83-9a1a-4c8c006b42e9" alt="IMG_0248" width="1000"/>


## Project Overview

This project, **livability**, leverages advanced web technologies and data analytics to provide a dynamic visualization of food deserts across Florida over time. Using MapboxGL, React, and Python, we've created an interactive tool that merges geoJson data with historical Florida census tract information, highlighting areas with limited access to affordable and nutritious food.

## Key Features

- **Dynamic Visualization**: Plot food deserts on an interactive MapboxGL map.
- **Filtering by County**: Focus on specific counties to understand local challenges.
- **Demographic Insights**: Access detailed demographic information for each census tract within a county.

<img src="https://github.com/user-attachments/assets/5968e83e-164f-4828-b935-d97c8b132da9" alt="IMG_0248" width="1000"/>

## Technologies & Libraries

- Frontend: React
- Mapping: MapboxGL
- Backend: Python
- Libraries: orjson, json, mapbox, pandas, geopandas

## Getting Started

To set up the project locally:

1. Clone the repository:
```
git clone <repository-url>
```

2. Change directory into the project folder:
```
cd my-react-app/src
```

3. Install dependencies and run the development server:
```
npm install
npm run dev
```

## Data Sources

- GeoJson data and historical census tract information related to food deserts were obtained from public datasets available on Kaggle and the Food Access Research Atlas.
- [Kaggle Dataset](https://www.kaggle.com/datasets/tcrammond/food-access-and-food-deserts)
- [Food Access Research Atlas](https://www.ers.usda.gov/data-products/food-access-research-atlas/)

## What's Next
* Make Mobile-Friendly
* Expanding support to all states within the U.S.
* Statistic descriptions
* LSTM Model Predictions of Food Desert Expansion within the U.S.


## Contributors

- Hashem Al Sailani
- Moyosoreoluwa Ayoade
- Nathan Allen
