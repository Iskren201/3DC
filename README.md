# 3DC

## Project Overview

3DC is a web application that utilizes modern web technologies for both front-end and back-end development. The project is designed to be highly scalable, maintainable, and efficient.

### Front-end

The front-end of this project is built using:

- **ReactJS**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that leverages native ES modules.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.

### Back-end

The back-end of this project is developed using:

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **TypeORM**: An ORM that runs in NodeJS, allowing for seamless interaction with the database.

### Database

For data storage and management, the project uses:

- **PostgreSQL**: A powerful, open-source object-relational database system.
- **pgAdmin**: A web-based GUI tool to manage PostgreSQL databases.

## How to Start the Project

### Prerequisites

Before you start, ensure you have the following software installed on your system:

- **Node.js** (v14.x or higher)
- **npm** or **yarn**
- **PostgreSQL**
- **pgAdmin** (optional, for database management)

### Setting Up the Front-end

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/3DC.git
   cd 3DC
   ```

2. Navigate to the front-end directory:

   ```sh
   cd frontend
   ```

3. Install the dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   The front-end should now be running on `http://localhost:3000`.

### Setting Up the Back-end

1. Navigate to the back-end directory:

   ```sh
   cd backend
   ```

2. Install the dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables. Create a `.env` file in the backend directory with the following content:

   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=your_postgres_user
   DATABASE_PASSWORD=your_postgres_password
   DATABASE_NAME=your_database_name
   ```

4. Run database migrations:

   ```sh
   npm run typeorm migration:run
   # or
   yarn typeorm migration:run
   ```

5. Start the back-end server:

   ```sh
   npm run start:dev
   # or
   yarn start:dev
   ```

   The back-end should now be running on `http://localhost:3001`.

### Setting Up the Database

1. Open pgAdmin and create a new database named `your_database_name`.
2. Ensure your PostgreSQL server is running and accessible with the credentials provided in the `.env` file.

### Full-stack Integration

With both front-end and back-end running, your application should be fully functional. Access the application via `http://localhost:3000`.

## Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

## Rumen 
