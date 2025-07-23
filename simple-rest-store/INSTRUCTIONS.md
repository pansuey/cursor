# Quick Start Instructions

## 🚀 Getting Started with Simple Rest Store

### Step 1: Setup Your Environment
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Step 2: Get Your Zapier Storage Secret
1. Go to [https://zapier.com/app/connections](https://zapier.com/app/connections)
2. Search for "Storage by Zapier" and create a new connection
3. Enter a secret key (up to 36 characters) - remember this!
4. Save your connection

### Step 3: Connect and Start Using
1. Enter your secret key in the "Secret Key" field
2. Click "Connect & Load Records"
3. Start adding, editing, and managing your data!

## 📝 Features Overview

### ✅ What You Can Do
- **View Records**: See all your stored key-value pairs
- **Add Records**: Create new entries with any JSON-serializable data
- **Edit Records**: Modify existing values inline
- **Delete Records**: Remove individual records or clear everything
- **JSON Support**: Store strings, numbers, objects, arrays, etc.

### 🔐 Security Notes
- Your secret key stays in your browser - never sent to this app's servers
- All API calls go directly to store.zapier.com
- This app is purely a client-side interface

### 📊 API Limits (store.zapier.com)
- **500 values** per secret maximum
- **32 characters** max key length
- **2500 bytes** max value size
- **2 months** data retention for inactive accounts

## 🛠️ Development

### Available Scripts
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

### Environment Variables
Copy `.env.example` to `.env.local` to customize settings (optional).

## 🆘 Troubleshooting

### Common Issues
1. **"Failed to fetch records"** - Check your secret key
2. **CORS errors** - This is normal; the app handles them gracefully
3. **Can't connect** - Ensure you have internet access to store.zapier.com

### Need Help?
- Check the [store.zapier.com documentation](https://zapier.com/help/doc/how-get-started-storage-zapier)
- Review the README.md for detailed information
- Open an issue on GitHub for bugs or feature requests

---

*Happy data managing! 🎉*