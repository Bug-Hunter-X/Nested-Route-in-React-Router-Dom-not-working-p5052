# React Router Dom Nested Route Issue

This repository demonstrates a common issue encountered when working with nested routes in React Router Dom v6.  The `ContactDetail` component, intended to render when a specific contact ID is provided, fails to load correctly.

## Problem

The nested route `/contact/:id` within the `/contact` route does not render the `ContactDetail` component.  Instead, it renders nothing or perhaps the Contact component, which may not be the expected behavior.

## Solution

The issue can be resolved by using the `useParams` hook correctly within the `ContactDetail` component to access the dynamic `id` parameter, and ensuring the parent route's element renders something to indicate its content.  This often involves a `<Outlet />` component within parent routes. This example showcases the correct way to achieve this with both the parent `/contact` route and the child `/contact/:id` route.