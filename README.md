
# E-Commerce Store

A **React** application styled with **Tailwind CSS** that utilizes the **FakeStore API** to create a dynamic and fully functional e-commerce website. This project demonstrates how to build a product listing page, product detail page, and shopping cart functionality using React, Tailwind CSS, and API data fetching.

### Features
- **Product Listings**: Displays all products fetched from the FakeStore API with detailed descriptions, prices, and categories.
- **Product Details**: Users can click on any product to view more information on a dedicated page.
- **Shopping Cart**: Users can add products to a shopping cart, adjust quantities, and view the total price.
- **Responsive Design**: Optimized for both desktop and mobile devices using Tailwind CSS.
- **API Integration**: Real-time data fetched from the FakeStore API for up-to-date product listings.

### Technologies Used
- **React**: For building user interfaces and handling component state.
- **Tailwind CSS**: For utility-first CSS styling and responsive design.
- **FakeStore API**: Provides the data for the product listings.
- **Netlify**: Used for deployment of the live website.

### Getting Started

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/tichzvidzayi/ecommercestore.git
   cd ecommercestore/
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

### Live Demo
You can view the live application deployed on Netlify at:

[https://tichstore.netlify.app/](https://tichstore.netlify.app/)

### Project Structure
The project is organized as follows:
- **src/components**: Contains all reusable components such as `ProductCard`, `Cart`, and `Header`.
- **src/pages**: Includes pages like `Home`, `ProductDetails`, and `CartPage`.
- **src/services**: Manages API calls to fetch product data.
- **src/styles**: Tailwind configurations and additional global styling.

### Dependencies
- **React**: ^18.x.x
- **Tailwind CSS**: ^3.x.x
- **Axios**: ^1.x.x (for making API requests)

### Deployment

The app is deployed on **Netlify**. To deploy it yourself, follow these steps:

1. Push your repository to GitHub.
2. Log in to [Netlify](https://www.netlify.com/) and link your GitHub repository.
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `build/`

4. Click **Deploy** and your site will be live.

---

Let me know if you'd like to add or modify anything further!
