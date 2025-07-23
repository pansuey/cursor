# Simple Rest Store

A modern, intuitive web interface for [store.zapier.com](https://store.zapier.com), Zapier's simple REST storage API. This application provides an easy-to-use interface for managing key-value data storage with full CRUD operations.

## Features

- 🔐 **Secure Authentication** - Connect using your Zapier storage secret
- 📝 **Full CRUD Operations** - Create, Read, Update, and Delete records
- 🎨 **Modern UI** - Clean, responsive design with dark mode support
- 📱 **Mobile Friendly** - Works seamlessly on desktop and mobile devices
- 🔍 **JSON Support** - Automatically handles JSON objects and strings
- ⚡ **Real-time Updates** - Instant feedback for all operations
- 🗑️ **Bulk Operations** - Clear all records with confirmation

## About store.zapier.com

store.zapier.com is a simple storage REST API provided by Zapier that allows you to:
- Store any JSON serializable value
- Manage up to 500 values per secret
- Use keys up to 32 characters
- Store values up to 2500 bytes each
- Data persists for 2 months of inactivity

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Zapier account to create storage secrets

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd simple-rest-store
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Creating a Storage Secret

1. Create a Zapier account if you don't have one
2. Log in to Zapier and go to [https://zapier.com/app/connections](https://zapier.com/app/connections)
3. Select "Storage by Zapier" to create a new Connection
4. Enter a secret (up to 36 characters)
5. Use this secret in the Simple Rest Store interface

## Usage

### Connecting to Storage

1. Enter your storage secret in the "Secret Key" field
2. Click "Connect & Load Records" to authenticate and fetch your data
3. The interface will display all your stored records

### Managing Records

- **Add New Record**: Use the "Add New Record" form to create key-value pairs
- **Edit Record**: Click the edit icon next to any record to modify its value
- **Delete Record**: Click the trash icon to delete individual records
- **Clear All**: Use the "Clear All" button to delete all records (with confirmation)

### Data Formats

The interface supports both simple strings and JSON objects:
- Simple strings: `"hello world"`
- Numbers: `42`
- JSON objects: `{"name": "John", "age": 30}`
- Arrays: `[1, 2, 3, "four"]`

## API Endpoints

The application interacts with these store.zapier.com endpoints:

- `GET /api/records?secret=<secret>` - Fetch all records
- `POST /api/records?secret=<secret>` - Create/update records
- `DELETE /api/records?secret=<secret>&key=<key>` - Delete specific record
- `DELETE /api/records?secret=<secret>` - Clear all records

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Axios** - HTTP client for API requests

## Development Scripts

```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For issues with the interface, please open a GitHub issue.
For store.zapier.com API questions, visit [Zapier's help documentation](https://zapier.com/help/doc/how-get-started-storage-zapier).

---

Built with ❤️ for the Zapier community
