# Supercom 24*7 E-store

This eCommerce app is built using React, React Redux for state management, and Firebase for backend services. It provides a user-friendly interface for customers to browse products, add them to their cart, and make purchases securely.

## Features

- **User Authentication**: Users can sign up and log in securely using Firebase Authentication.
- **Product Catalog**: Browse through a wide range of products with detailed descriptions and images.
- **Shopping Cart**: Add products to the cart and manage quantities before checkout.
- **Checkout Process**: Securely process payments using Firebase or integrate with other payment gateways.
- **Order History**: View past orders and track their status.
- **Admin Dashboard** (optional): Manage products, orders, and customer data easily with an admin dashboard.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Redux**: A predictable state container for JavaScript apps, used for managing application state.
- **Firebase**: A platform developed by Google for creating mobile and web applications.
    - **Firebase Authentication**: Provides backend services for user authentication.
    - **Firebase Firestore**: A flexible, scalable database for mobile, web, and server development.
    - **Firebase Hosting**: Fast and secure web hosting provided by Firebase.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/imshivamgupta/supercom.git
    ```

2. Install dependencies:
    ```bash
    cd supercom
    npm install
    ```

3. Create a Firebase project and set up Firebase Authentication, Firestore, and Hosting.

4. Configure Firebase credentials in your app:
    - Create a `.env` file in the root directory.
    - Add your Firebase configuration:
        ```env
        REACT_APP_FIREBASE_API_KEY=your-api-key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
        REACT_APP_FIREBASE_PROJECT_ID=your-project-id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
        REACT_APP_FIREBASE_APP_ID=your-app-id
        ```

## Usage

Start the development server:
```bash
npm start