# Contributing

- Create files in your route (for example, `./src/app/students/breyon-gunn`)
  that adhere to [university
  policies](https://www.unwsp.edu/about-us/christian-values/declaration-of-christian-community/).
- Collaborate with others on the main pages with permission (e.g.
  `./src/app/page.tsx`)
- Create your own components in `./src/components`

## Before You Commit and Push

Always remember to run this command before commiting:

```bash
npm run fix
```

This fixes styling issues and other minor fixes.

## Getting Started

Already have some HTML and CSS? [Go here](#migrating-from-html-and-css).

- Learn [React](https://react.dev)
- Create your very own directory in `./src/app/students/your-name`
- Create a `./src/app/students/your-name/page.tsx`
- Input this code:

```tsx
export default function Page() {
  return (
    <>
      <h1>This is your new route!</h1>
      <p>Put some cool stuff in here!</p>
    </>
  );
}
```

## Documentation

To learn how to create your own page, take a look at the following resources:

- [Next.js documentation](https://nextjs.org/docs): For questions like "where
  do I put my files?" or "how do I create a dynamic webpage?"
  - [Where do I put
    files?](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
  - [How do I access an API endpoint
    server-side?](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
- [React documentation](https://react.dev/reference/react): This is an
  important one. Go here to learn the basics of how to make a webpage in our
  app.
  - [Tutorial](https://react.dev/reference/react)
- [Tailwind CSS
  documentation](https://tailwindcss.com/docs/styling-with-utility-classes):
  Look here for information on how to use Tailwind CSS for a better alternative
  to CSS.
- [Motion documentation](https://motion.dev/docs/react-quick-start): look here
  to figure out how to do animations.

## Development Server

To run the development server so that you can test out your pages on your own
computer, go into the terminal and execute this:

```bash
npm run dev
```

The command output will tell you what URL to go to; usually it's
<http://localhost:3000>.

## FAQ

### Where do I put my files?

If you are making your own page, create a file under
`src/app/students/your-name/page.tsx`. For example, my name is Austin Long, so
I should put my page at `src/app/students/austin-long/page.tsx`. To go to your
page in the [development server](#development-server), navigate to
`http://localhost:3000/students/your-name`.

### How do I create images?

Images are a bit tricky with our setup, but follow these steps and you should
be fine.

You cannot use the plain `<img>` tag because it does not have important
optimizations that Next.js provides. Instead, we use the `<Image>` tag,
imported from `next/image`. One major difference with this tag is that you will
get errors if you don't include the `alt`, `width`, and `height` props (React's
equivalent to HTML attributes). Note that the `width` and `height` props are
the exact width and height of the image in pixels, and not the width and height
that the image is displayed. Use CSS for that. You can learn more about
`next/image`
[here](https://nextjs.org/docs/pages/api-reference/components/image)

Here's an example:

```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10">
        <Image
          width={300}
          height={300}
          src="/images/general/csc-logo.png"
          alt="CS Club Logo"
        />
      </div>
    </div>
  );
}
```

### How do I create links?

Links in Next.js have a really cool feature:
[prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching).
Therefore, we do not use the `<a>` tag in Next.js projects. Usually, you can
simply replace the `a` with `Link`, put an `import Link from "next/link"` at
the top of your file, and you should be good to go.

### Migrating from HTML and CSS

If you already have a webpage created with HTML and CSS, you likely do not want
to recreate the entire thing. Follow these steps to save work!

First, you need to get your files into the project. Take a look for any `src`
attributes you have, and consider whether those can be put into the web server.
If so, place them in the [`public`](public) directory. The public directory is
like a plain HTTP server like Apache or Nginx. Putting files in a subdirectory
will create routes. For example, putting `file.txt` at `public/file.txt` will
create a route called `https://unwcsclub.dev/file.txt` (notice the exclusion of
`public`). Make sure any images you include are not referenced by external
`src`s.

The next step is to create your development location. If you are creating a
personal page, that would mean creating a directory under `src/app/students/`
with your name. For example, Austin's is `src/app/students/austin-long`. The
next thing you need to do is create some files in here. Unlike the `public`
directory, files do not correspond to routes on the server. Instead,
directories correspond to routes. To make a directory into a route, you need to
add a `page.tsx` file in it. You could think of this as an `index.html`. That
will be your HTML file. Now, for CSS. Put your CSS file next to `page.tsx` You
can name it whatever you like (just follow the lowercase dash filename
convention). For example, I could name mine `styles.css`. After all these
steps, you should have a directory structure like so:

```tree
cs-club-site
├── public
│   └── images
│       └── your-name
│           └── your-images.png
└── src
    └── app
        └── students
            └── your-name
                ├── styles.css
                └── page.tsx
```

Now, you need to create your page. Unfortunately, HTML will not suffice. Due to
reasons I won't go into here, we are using React for our project. React uses a
language similar to HTML called JSX. In fact, you can use an online converter
such as [this one](https://transform.tools/html-to-jsx) to do the conversion
for you. Note that you can only include things underneath the body tag in your
HTML, as your JSX code will be inserted into a layout that already includes the
`<html>`, `<body>`, and other HTML boilerplate tags. If you would like to
include metadata, you can find the documentation
[here](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

After you've created your JSX, you need to put it into the file. Use this
template:

```tsx
import "styles.css"; // or whatever you named your CSS file

export default function Page() {
  return (
    <p>
      Replace this p with your JSX code. It is important that you only include
      the tags below the body tag.
    </p>
  );
}
```

Next, you should be able to spin up the development server to test.

Fire up the terminal (this is assuming you already have Node.js and npm
installed). Then, you can run this command from the project root:

```bash
npm run dev
```

That should start the development server. To go see your page, whip up a web
browser and navigate to <http://localhost:3000/students/your-name> (don't
forget to replace `your-name` with your actual name).

That should be the majority of the things you need to do! You might see some
warnings regarding your `img` and `a` tags. To address those, you can take a
look at [How do I create images?](#how-do-i-create-images%3F) and [How do I
create links?](#how-do-i-create-links%3F). Or, you can simply create a PR and
we'll address the issues for you.
