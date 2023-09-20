# Result Management Application (Angular, Express, Node.js, and MySQL)

This is a Result Management Application developed using Angular for the front end and Express with Node.js for the back end. The application allows two types of users to log in: students and teachers. Students can view their results by entering their roll number and date of birth, while teachers can view, add, edit, and delete records. MySQL is used as the database to store and manage records.

## Features

- User-friendly web interface developed with Angular.
- Two user types: Students and Teachers.
- **Students** can:
  - Log in by providing their roll number and date of birth.
  - View their results.
  - Receive an error message if the provided roll number and date of birth do not match any records.
- **Teachers** can:
  - Log in with appropriate credentials.
  - View all records.
  - Add new records.
  - Edit existing records.
  - Delete records.

## Usage

To run the Result Management Application, follow these steps:

1. Clone the repository or download the source code.

2. Navigate to the project directory.

3. Install Node.js and npm (Node Package Manager) if not already installed on your system.

4. Install the required Node.js packages for the server by running the following command in the project directory:

   ```shell
   npm install
   ```

5. Navigate to the "client" directory using the command:

   ```shell
   cd client
   ```

6. Install the required Angular packages by running:

   ```shell
   npm install
   ```

7. Return to the project root directory using:

   ```shell
   cd ..
   ```

8. Set up a MySQL database for storing records. Configure the database connection details in the server configuration.

9. Start the Node.js server by running:

   ```shell
   node server.js
   ```

10. Open a web browser and navigate to `http://localhost:3000` to access the application.

11. From the homepage, click the appropriate button to log in as a student or teacher.

12. If you are a **student**, provide your roll number and date of birth to view your results.

13. If you are a **teacher**, log in with your credentials to perform various actions.

## User Interface

- You are encouraged to enhance the UI experience, and you can use libraries like Bootstrap or Materialize for styling.

## Backend Using Express.js, Node.js, and MySQL

- The application uses Express.js for the backend framework, Node.js for server-side operations, and MySQL as the database to store and manage records.
