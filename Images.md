# Guide to Using the Next.js `Image` Component

## 1. Basic Usage

```jsx
import Image from "next/image";

<Image
  src="/images/example.jpg"
  alt="Description of image"
  width={500}
  height={300}
/>;
```

- `src`: Path or URL to the image.
- `alt`: Accessible description.
- `width` & `height`: Required for layout.

---

## 2. Responsive Images

```jsx
<Image
  src="/images/example.jpg"
  alt="Responsive image"
  width={700}
  height={475}
  sizes="(max-width: 700px) 100vw, 700px"
  style={{ width: "100%", height: "auto" }}
/>
```

- Use `sizes` and CSS for responsiveness.

---

## 3. Optimization Features

- Automatic lazy loading.
- Built-in image resizing and format conversion.
- CDN support for faster delivery.

---

## 4. External Images

```jsx
<Image
  src="https://example.com/image.jpg"
  alt="External image"
  width={400}
  height={300}
/>
```

- Add domains to `next.config.js` under `images.domains`.

---

## 5. Placeholder and Blur

```jsx
<Image
  src="/images/example.jpg"
  alt="Blurred placeholder"
  width={500}
  height={300}
  placeholder="blur"
  blurDataURL="/images/placeholder.png"
/>
```

- Use `placeholder="blur"` for a blur effect while loading.

---

## 6. Priority Loading

```jsx
<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
/>
```

- Use `priority` for above-the-fold images.

---

# Specific Project Usage

## For this project Images is a little bit challenging

for example Image in products list at home page:

```tsx
<div className="grid grid-cols-4 gap-6">
  {products.map((product) => (
    <div
      key={product.id}
      className="relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-lg border p-4"
    >
      {/* Check [Image element guide](/Images.md)*/}
      <Image
        src={product.imageUrl}
        alt=""
        fill
        className="h-full translate-y-10 scale-125 object-cover object-top"
      />
    </div>
  ))}
</div>
```

### Main challenge with this version was fitting the images to be zoomed in a little bit but also to be "Fitting" the div container along with undisturbed grid gaps and grid structure

# Break it down:

## 1st using fill attribute in next/Image element

### fill is trying to fit the image with the div to ensure the styling is left for tailwind css or css, so with that next wouldn't have to worry about handling or calculating the ratio of this image

## 2nd using the scale class

### this scale class work as zooming in so I can see which product (action figure) I'm looking at

### further more this could be dynamic but it would be more challenging for developing it and for admin users when adding products and there images

## 3rd relative and absolute

### internally next initialize the Image element to this:

```tsx
position: absolute;
inset: 0;   /* top:0; right:0; bottom:0; left:0 */
width: 100%;
height: 100%;
```

### this means that the image is absolutely positioned
### Absolutely positioned elements need a positioned parent so relative attribute solve this 
If you have an element that needs to be positioned according to it's parent layout, for an instance some product text or title should be on the bottom left of the image or the first div in the product card.

This relative also solves the image floating in the nowhere problem, it tells the fill to fill the image div. 

It is crucial for this project and it is complicated needs some more research and try and error if you never tried it.



## References

- [Next.js Image Documentation](https://nextjs.org/docs/pages/api-reference/components/image)
- [Image Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/images)
