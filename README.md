# 🏠 Homebnb

A modern rental platform focused on property discovery, authentication, reservations, and a seamless booking experience.

# 🛠 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-4B6A88?style=flat-square&logo=next.js&logoColor=ffffff)
![React](https://img.shields.io/badge/React-7C8F63?style=flat-square&logo=react&logoColor=ffffff)
![TypeScript](https://img.shields.io/badge/TypeScript-E0B64A?style=flat-square&logo=typescript&logoColor=000000)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4B6A88?style=flat-square&logo=tailwind-css&logoColor=ffffff)
![Prisma](https://img.shields.io/badge/Prisma-7C8F63?style=flat-square&logo=prisma&logoColor=ffffff)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-E0B64A?style=flat-square&logo=postgresql&logoColor=000000)
![BetterAuth](https://img.shields.io/badge/BetterAuth-4B6A88?style=flat-square)
![Cloudinary](https://img.shields.io/badge/Cloudinary-7C8F63?style=flat-square&logo=cloudinary&logoColor=ffffff)

# ✨ Overview

Homebnb is a full-stack accommodation platform designed to provide a seamless experience for both guests and hosts.

The platform focuses on:

- property browsing and discovery
- location-based search
- secure authentication
- booking management
- personalized favorite collections
- host property management

It provides a complete rental workflow where users can explore properties, reserve stays, manage bookings, and publish their own listings as hosts.

# 🔍 Browsing & Search

The core experience starts with property discovery through an intuitive browsing interface.

Users can:

- browse available properties
- view property details
- explore images and descriptions
- search accommodations based on user preferences

The search system helps users quickly find suitable stays and improves the overall discovery experience.

![browsing](/public/screenshots/browsing.png)

<div align="center">

_Property browsing interface displaying available accommodations._

</div>

# 🔐 Authentication System

The authentication system provides secure user account management powered by Better Auth.

Users can:

- create a new account
- login securely
- maintain personalized profiles
- access booking and favorite features

Authentication is integrated with the rest of the platform to provide user-specific experiences.

![register](/public/screenshots/register.png)

<div align="center">

_User registration interface for creating a new account._

</div>

![login](/public/screenshots/login.png)

<div align="center">

_User login interface for secure account access._

</div>

# ❤️ Favorites & Personal Collection

Users can save properties they are interested in and revisit them later.

Features include:

- add properties to favorites
- remove saved properties
- view personal favorite collections

The favorite system allows users to organize potential stays before making booking decisions.

![favorites](/public/screenshots/favorites.png)

<div align="center">

_Personal favorite collection for saved properties._

</div>

# 📅 Booking System

The booking workflow allows users to reserve properties and manage their stays.

Users can:

- create bookings
- view booking history
- manage upcoming reservations
- cancel their own bookings

The system provides a complete reservation flow connecting guests and hosts.

![booking](/public/screenshots/booking.png)

<div align="center">

_Booking management interface for guest reservations._

</div>

# 🏡 Host Property Management

Hosts can publish and manage their own properties through the platform.

Host features include:

- create new property listings
- upload property images
- manage published accommodations
- cancel bookings related to their properties

Cloudinary is used for image storage and management, providing optimized property image handling.

![host](/public/screenshots/host.png)

<div align="center">

_Host dashboard for creating and managing property listings._

</div>

# ❌ Cancellation Management

The platform supports cancellation workflows for both guests and hosts.

Users can:

- cancel their own reservations
- manage booking status changes

Hosts can:

- cancel reservations for their properties
- maintain control over their listings

The cancellation system keeps booking states synchronized between guests and hosts.

![cancel](/public/screenshots/cancel.png)

<div align="center">

_Booking cancellation workflow between guests and hosts._

</div>

# ⚡ Lighthouse Report

The project is optimized with modern Next.js features, responsive image delivery, and efficient rendering to provide a fast user experience.

Lighthouse Scores

- 🚀 Performance — 95
- ♿ Accessibility — ?
- ✅ Best Practices — 100
- 🔍 SEO — 100

![lighthouse](/public/screenshots/lighthouse.png)

<div align="center">

_Lighthouse audit results._

</div>
