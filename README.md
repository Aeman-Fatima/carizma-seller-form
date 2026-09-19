# Carizma Seller Platform

An **Angular 16 vehicle-selling and instant-offer workflow** that guides sellers from vehicle identification through condition assessment, contact details, review, and offer acceptance.

The application integrates with external vehicle-data and Carizma REST APIs and supports VIN decoding, licence-plate lookup, manual vehicle selection, dynamic questionnaires, and instant offers.

> **Note:** This repository contains the Angular frontend. The Carizma backend services consumed by the application are not included.

---

## How It Works

```text
                    SELL YOUR CAR
                         │
           ┌─────────────┼─────────────┐
           ▼             ▼             ▼
       VIN Lookup    Plate Lookup     Manual
                                      Selection
           └─────────────┼─────────────┘
                         ▼
                  Vehicle Identified
                         │
                         ▼
              Details & Condition
                         │
                         ▼
                Seller Information
                         │
                         ▼
                       Review
                         │
                         ▼
                 Instant Offer API
                         │
                    ┌────┴────┐
                    ▼         ▼
                  Accept    Reject
```

## Key Features

- **Three vehicle identification methods** — VIN, licence plate, or manual Year → Make → Model → Trim selection
- **VIN decoding** using external vehicle-data services
- **Dynamic vehicle selection** with API-driven dependent fields
- **Multi-step seller journey** using Angular Material Stepper
- **Reactive forms** with validation and conditional questions
- **Vehicle condition assessment** covering mechanical, interior, body, wheel, glass, and damage information
- **Shared state** across the complete seller workflow
- **Instant offer generation** through Carizma REST APIs
- **Offer acceptance/rejection** workflow
- **Salesforce handoff** following successful seller/vehicle submission
- Loading states, dialogs, toast notifications, and conversion tracking

---

## Architecture

```text
Angular Frontend
      │
      ├── Vehicle Selection
      ├── Vehicle Details
      ├── Condition Assessment
      ├── Seller Contact
      ├── Review
      └── Instant Offer
              │
              │ REST
              ▼
       Carizma Backend
              │
       ┌──────┼──────────┐
       ▼      ▼          ▼
    Vehicle  Offer    Salesforce
     Data   Processing Integration
```

The frontend maintains vehicle and seller information through a shared Angular service while individual components manage each stage of the workflow.

Backend services and Salesforce server-side integration are external to this repository.

---

## Tech Stack

**Frontend:** Angular 16 · TypeScript · RxJS

**UI:** Angular Material · Angular CDK · Flex Layout

**Forms:** Angular Reactive Forms · Dynamic Validation

**Integration:** HttpClient · REST APIs · Vehicle/VIN APIs · Salesforce handoff

**UX:** Material Stepper · Dialogs · Toast Notifications · Loading States

---

## Engineering Concepts

This project demonstrates:

- Component-based Angular architecture
- Reactive and conditional forms
- RxJS event handling
- Shared application state
- REST API integration
- Third-party vehicle-data integration
- Dependent asynchronous form controls
- Multi-step workflow design
- Error and loading-state handling
- External CRM integration

---

## Repository Scope

This repository contains the **frontend implementation only**.

```text
Angular Frontend
       │
       │ REST APIs
       ▼
Carizma Backend       ← Not included
       │
       ├── Vehicle data
       ├── Seller processing
       ├── Instant offer
       ├── Offer status
       └── Salesforce integration
```

---

## Screenshots

> Add screenshots here showing:
>
> 1. Vehicle identification
> 2. Condition questionnaire
> 3. Review screen
> 4. Instant offer

---

## About

This project demonstrates a real-world, API-driven Angular workflow combining vehicle identification, dynamic questionnaires, shared state, external integrations, and offer processing into a guided seller experience.

**Portfolio:** [aeman.com.au](https://www.aeman.com.au/)  
**GitHub:** [github.com/Aeman-Fatima](https://github.com/Aeman-Fatima)
