# FashionStudio
A shopping/ E-Commerce App built with angular and dotnet core 2.0 for carrying out shopping transactions 
and Role based authentication for carrying out responsibilities.

EndPoints
Authentication/User Controller
The app uses Jwt Token authentication for logged in users and so only authorized users can access allowed routes
/api/auth/login - For Logging in users and admin
/api/auth/register - For registering users
/api/users/:id - To retrieve a single user

Categories
GET /api/categories - For retrieving all categories when the app loads with page info. The app chooses six selected categories to be displayed on the navbar but an Admin can configure the top categories to be displayed on the navbar
GET /api/categories/:categoryId/subCategories - For retrieving all the subcategories for a particular Category Id 
when the app loads
GET /api/categories/:id - To get a single category 
POST /api/categories - To create categories, only accessible to Admin Roles 
POST /api/categories/sub - To create subcategories, only accessible to Admin Roles 
PUT /api/categories/:id - To edit a single category, only accessible to Admin Roles 
DELETE /api/categories/:id - To delete a single category, only accessible to Admin Roles

Brands
GET /api/brands?categoryId={categoryId} - For retrieving all brands when the app loads for a particular category
GET /api/brands/all - For retrieving all brands
GET /api/brands/:id - To get a single brand 
POST /api/brands - To create a brand, only accessible to Admin Roles 
PUT /api/brands/:id - To edit a single brand, only accessible to Admin Roles 
DELETE /api/brands/:id - To delete a single brand, only accessible to Admin Roles

Merchants
GET /api/merchants - For retrieving all merchants
GET /api/merchants/:id - To get a single merchant 
POST /api/merchants - To create a merchant, only accessible to Admin Roles 
PUT /api/merchants/:id - To edit a single merchant, only accessible to Admin Roles 
DELETE /api/merchants/:id - To delete a single merchant, only accessible to Admin Roles

Stores
GET /api/stores - For retrieving all stores
GET /api/stores/:id - To get a single store 
POST /api/stores - To create a store, only accessible to Admin Roles 
PUT /api/stores/:id - To edit a single store, only accessible to Admin Roles 
DELETE /api/stores/:id - To delete a single store, only accessible to Admin Roles

Products
GET /api/products - For retrieving all products
GET /api/products/:code - To get a single product 
POST /api/products - To create a product, includes features for products, and product image 
only accessible to Admin Roles 
PUT /api/products/:code - To edit a single product, only accessible to Admin Roles 
DELETE /api/products/:code - To delete a single product, only accessible to Admin Roles


The App implements Paging for the products and filters/sorts products based on various sort parameters e.g.
price range, brand. 
 

ng serve

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
