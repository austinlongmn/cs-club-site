# CS Club Site

This is the project repo for the official site of the
Computer Science Club at the University of Northwestern -
St. Paul. It is created with the following libraries:

- [Next.js](https://nextjs.org)
  - [React](https://react.dev)
- [Chakra UI](https://chakra-ui.com)
- [Motion](https://motion.dev)
- [Tailwind CSS](https://tailwindcss.com)

The site will be used to showcase everyone's projects and
endeavors at UNW and beyond. Everyone gets their own route.
There will also eventually be a slideshow for use inside
UNW.

## Contributing

- Create files in your route (for example,
  `./src/app/breyon`) that adhere to [university policies](https://www.unwsp.edu/about-us/christian-values/declaration-of-christian-community/).
- Collaborate with others on the main pages with permission
  (e.g. `./src/app/page.tsx`)
- Create your own components in `./src/components`

### Getting Started

- Learn [React](https://react.dev)
- Create your very own directory in `./src/app/your-name`
- Create a `./src/app/your-name/page.tsx`
- Input this code:

```tsx
import { Heading, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Heading>This is your new route!</Heading>
      <Text>Put some cool stuff</Text>
    </>
  )
}

```
