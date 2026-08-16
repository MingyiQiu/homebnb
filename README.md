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

It provides a complete rental workflow where guests can explore properties, reserve stays, manage bookings, and publish their own listings as hosts.

# 🔍 Browsing & Search

The core experience starts with property discovery through an intuitive browsing interface.

Guests can:

- browse available properties
- view property details
- explore images and descriptions
- search accommodations based on their preferences

The search system helps guests quickly find suitable stays and improves the overall discovery experience.

![browsing](/public/screenshots/browsing.png)

<div align="center">

_Property browsing interface displaying available accommodations._

</div>

# 🔐 Authentication System

The authentication system provides secure account management powered by Better Auth.

Guests can:

- create a new account
- login securely
- maintain personalized profiles
- access booking and favorite features

Authentication is integrated with the rest of the platform to provide personalized experiences for each guest.

![register](/public/screenshots/register.png)

<div align="center">

_Guest registration interface for creating a new account._

</div>

![login](/public/screenshots/login.png)

<div align="center">

_Guest login interface for secure account access._

</div>

# ❤️ Favorites & Personal Collection

Guests can save properties they are interested in and revisit them later.

Features include:

- add properties to favorites
- remove saved properties
- view personal favorite collections

The favorite system allows guests to organize potential stays before making booking decisions.

![favorites](/public/screenshots/favorites.png)

<div align="center">

_Personal favorite collection for saved properties._

</div>

# 📅 Booking System

The booking workflow allows guests to reserve properties and manage their stays.

Guests can:

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

Guests can:

- cancel their own reservations
- manage booking status changes

Hosts can:

- cancel reservations for their properties
- maintain control over their listings

The cancellation system keeps booking states synchronized between guests and hosts.

![guest cancellation](/public/screenshots/guest-cancel.png)

<div align="center">

_Guest cancellation interface for managing personal reservations._

</div>

![host cancellation](/public/screenshots/host-cancel.png)

<div align="center">

_Host cancellation interface for managing reservations for listed properties._

</div>

# ⚡ Lighthouse Report

The project uses modern Next.js features, optimized image delivery, and efficient rendering to provide a fast and responsive user experience.

Lighthouse Scores

- 🚀 Performance — 91
- ♿ Accessibility — 96
- ✅ Best Practices — 100
- 🔍 SEO — 100

![lighthouse](/public/screenshots/lighthouse.png)

<div align="center">

_Lighthouse audit results._

</div>
