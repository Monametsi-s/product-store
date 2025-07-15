# Product Store 🛒

A modern, full-stack product management system built with the MERN stack, featuring complete CRUD operations for product inventory with a responsive and intuitive user interface.

## ✨ Features

- **Product Management**: Create, read, update, and delete products
- **Responsive Design**: Mobile-friendly interface using Chakra UI
- **Real-time Updates**: Instant feedback with toast notifications
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Image Support**: Product images with URL validation
- **Modern UI**: Clean, professional design with smooth animations
- **State Management**: Efficient state handling with Zustand

## 🚀 Tech Stack

### Frontend
- **React** - User interface library
- **Chakra UI** - Modern component library
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Vite** - Fast build tool

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Monametsi-s/product-store.git
cd product-store
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following environment variables to your `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/product-store
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/product-store

Note: Create a mongodb account in their website for free.
PORT=5000
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
```

### 4. Running the Application

#### Start the backend server:
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:5000`

#### Start the frontend development server:
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

### Request/Response Examples

#### Create Product
```json
POST /api/products
{
  "name": "Sample Product",
  "price": 29.99,
  "image": "https://example.com/image.jpg"
}
```

#### Response Format
```json
{
  "success": true,
  "data": {
    "_id": "product_id",
    "name": "Sample Product",
    "price": 29.99,
    "image": "https://example.com/image.jpg",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## 📁 Project Structure

```
product-store/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.route.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── store/
│   │   │   └── product.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## 🎨 Screenshots

### Home Page
- View all products in a responsive grid layout
- Search and filter functionality
- Dark/Light mode toggle

### Create Product
- Simple form to add new products
- Input validation and error handling
- Success notifications

### Edit Product
- Modal-based editing interface
- Real-time updates
- Form validation

## 🔧 Available Scripts

### Backend
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🚀 Deployment

### Backend Deployment (e.g., Heroku, Railway)
1. Set environment variables in your hosting platform
2. Ensure MongoDB connection string is configured
3. Deploy the backend folder

### Frontend Deployment (e.g., Netlify, Vercel)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Configure API endpoint for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Chakra UI for the beautiful component library
- MongoDB for the flexible database solution
- React community for the excellent ecosystem

## 📧 Contact

Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/product-store](https://github.com/yourusername/product-store)

---

⭐ If you found this project helpful, please give it a star!