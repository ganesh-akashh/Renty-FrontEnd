<h3 align="center">Rently- The Future of Real Estate Management</h3>

## <a >Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. 🔗 [Links](#links)
3. ⚙️ [TechStack](#techstack)
4. 🖥️ [Installation](#installation)
5. 🔋 [Features](#features)
6. 🕸️ [Best Practises Used](#bestpractises) 

## 🖥️ Links

1. The FrontEnd GitHub Repository URL of the Application can be found [here](insert GitHub repository link here)

2. The BackEnd GitHub Repository URL of the Application can be found [here](insert GitHub repository link here)

2. You can access the live website [here]():
   - Frontend hosted on [Vercel](https://vercel.com/)
   - Spring Boot backend hosted on [Render](https://render.com/)
   - MySQL database hosted on [Railway](https://railway.yap/)


## <a name="#introduction">🤖 Introduction</a>

Welcome to Rently - The Future of Real Estate Management. Developed using React JS for the frontend, Spring Boot for the backend, and MySQL for data storage, Rently offers a modern and efficient solution for both tenants and property owners.


## <a name="#techstack">🚀 TechStack</a>

1. React JS (FrontEnd).
2. Redux (Global State Management).
2. Springboot (Backend).
3. Tailwind CSS (CSS FrameWork).
4. ShadcnUI (UI Library).

## <a name="#installation">🖥️ Installation</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Java Development Kit (JDK)](https://www.oracle.com/in/java/technologies/downloads/)
- [MySQL Server](https://www.mysql.com/) (Database Management System)


**Frontend React-JS App**

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm i
```

3. Start the REACT-JS App:

```bash
npm run dev
```

**Backend SpringBoot App**

1. Navigate to the server directory:

```bash
cd server
```

2. Update MySQL Configuration:

   - Open the `application.properties` file in the `server/src/main/resources` directory.
   - Modify the `username` and `password` fields to match your MySQL server credentials:
     ```properties
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```

3. Start the Spring Boot application:
   - Run the main Java file of the Spring Boot application in the `server/src/main/java/com/example/rently/RentlyApplication.java` . Typically, this involves running the `main` method as the Java Code in the IDE.


## <a name="#features">🔋 Features</a>

👉 **Responsiveness**: Smooth performance and adaptability across various devices and screen sizes for a consistent user experience.

👉 **Role-Based Authentication**: Secure access control with different permissions for buyer and sellers.

👉 **Intuitive UI/UX**: Visually appealing and user-friendly interface for seamless interactions.

👉 **Seller Dashboard**: Dashboard for seller to visually view,add,update and delete all their properties.

👉 **Customer Portal**: Dedicated page for buyers to use filter options to find properties and click "Interested" to notify property owners.

👉 **Form Validation with Formik**: Robust validation using Formik to ensure accurate and complete data entry across all forms.

👉 **Exception Handling**: Effective handling of errors and exceptions to maintain application stability and provide a smooth user experience.

👉 **Email Notifications**: Automated email notifications for buyers and sellers based on thier intrested posts.

👉 **Like, Update, and Delete Posts**: Allow users to like properties they are interested in, update their own property listings, and delete listings they no longer wish to offer, enhancing user control and engagement.


## <a name="#bestpractises">🕸️ Best Practises Used</a>

1.  **Custom Hooks**.
2.  **Code Splitting**.
3.  **Well Organized Folder Structure**.
4.  **Global State Management using Redux**.
5.  **Responsiveness and Accessibility**.
6.  **Protected Routes**.
7.  **Pagination and Sorting**.
8.  **Filter Data**.




