# CS Club Site

This is the project repo for the official site of the Computer Science Club at
the University of Northwestern - St. Paul. It is created with the following
libraries:

- [Next.js](https://nextjs.org) - Main server framework
  - [React](https://react.dev) - Frontend
- [Chakra UI](https://chakra-ui.com) - Styling
- [Motion](https://motion.dev) - Animation library
- [Tailwind CSS](https://tailwindcss.com) - Alternative styling
- [Fastify](https://fastify.dev/) - HTTP server

The site will be used to showcase everyone's projects and endeavors at UNW and
beyond. Everyone gets their own route. There will also eventually be a
slideshow for use inside UNW.

## Contributing

- Create files in your route (for example, `./src/app/breyon`) that adhere to
  [university
  policies](https://www.unwsp.edu/about-us/christian-values/declaration-of-christian-community/).
- Collaborate with others on the main pages with permission (e.g.
  `./src/app/page.tsx`)
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
  );
}
```

### Documentation

To learn how to create your own page, take a look at the following resources:

- [Next.js documentation](https://nextjs.org/docs): For questions like "where
  do I put my files?" or "how do I create a dynamic webpage?" However, you
  shouldn't have to go here much.
  - [Where do I put my
    files?](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
  - [How do I access an API endpoint
    server-side?](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
- [React documentation](https://react.dev/reference/react): This is an
  important one. Go here to learn the basics of how to make a webpage in our
  app.
  - [Tutorial](https://react.dev/reference/react)
- [Chakra UI
  documentation](https://chakra-ui.com/docs/components/concepts/overview): Go
  here to learn what React components to use for certain things in your page.
  Also go here to learn how to make your components look a certain way.
  - [Components](https://chakra-ui.com/docs/components/concepts/overview)
  - [Styling](https://chakra-ui.com/docs/styling/overview)
- [Motion documentation](https://motion.dev/docs/react-quick-start): look here
  to figure out how to do animations.
- [Tailwind CSS
  documentation](https://tailwindcss.com/docs/styling-with-utility-classes):
  look here if you want to do a more advanced, but perhaps higher learning
  curve styling as an alternative to Chakra-UI's.

### Development Server

To run the development server so that you can test out your pages on your own
computer, go into the terminal and execute this:

```bash
npm run dev
```

If you want the server to go faster, and don't mind a hydration error (you can
just ignore it), you can use this:

```bash
npm run dev:turbo
```

This should use less memory and be orders of speeds faster. However, you might
notice a little "1 error" in the lower left-hand corner, which you can ignore.

### FAQ

#### Where do I put my files?

If you are making your own page, create a file under
`src/app/your-name/page.tsx`. For example, my name is Austin, so I should put
my page at `src/app/austin/page.tsx`. To go to your page in the [development
server](#development-server), navigate to `http://localhost:3000/your-name`.

#### How do I create images?

Creating images with our setup can be a bit tricky, but you can follow these
instructions:

First, make sure the following is at the top of your file:

```tsx
import { Image } from "@/componets/ui/image";
```

Then, place your image under the `public/images/your-name` directory. For
example, I have `public/images/austin/neovim-mark.svg`. You can also use other
image types. Then, create an image component:

```tsx
<Image
  src="/images/your-name/your-image-filename"
  alt="Text describing what the image is"
  width="The exact width of your image in pixels"
  height="The exact height of your image in pixels"
/>
```

Notice that I didn't include the `public` part of the route when I referenced
the image in the `src` prop. This is because the `public` directory is not part
of the route, it just tells Next.js that the files in it are not code to be
executed.

The tricky part is getting the image to be the right size. You cannot simply
use the `width` and `height` props, as you might think. Instead, you must use
CSS properties. You can use the custom props `chakraHeight` and `chakraWidth`
like so:

```tsx
<Image
  src="/images/your-name/your-image-filename"
  alt="Text describing what the image is"
  width="The exact width of your image in pixels"
  height="The exact height of your image in pixels"
  chakraWidth="auto"
  chakraHeight="100px"
/>
```

These correspond to the `width` and `height` props in the Chakra UI
documentation.

### Where do I import from?

There are a few locations you can import things pre-built React components from
in our project, and you need to use a specific one for certain components. Take
a look at this guide:

1. First, see if your component is in the `src/components/ui`, use that.
1. Otherwise, refer to the Chakra UI documentation.
