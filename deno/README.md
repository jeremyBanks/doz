This is a [Deno](http://deno.land/)-supporting branch of [Zod, a TypeScript-first schema validation library with static type inference](https://github.com/colinhacks/zod).

## Example

```typescript
#!/usr/bin/env -S deno run

import z from "https://deno.land/x/doz/mod.ts";

const Location = z.object({
  latitude: z.number(),
  longitude: z.number(),
}).strict();
type Location = z.infer<typeof Location>;

const destination: Location = Location.parse(JSON.parse(`{
  "latitude": 20,
  "longitude": "zero"
}`));
```

```js
error: Uncaught Error: [
  {
    "code": "invalid_type",
    "expected": "number",
    "received": "string",
    "path": [
      "longitude"
    ],
    "message": "Expected number, received string"
  }
]
  const ERROR = new ZodError([]);
                ^
    at ZodObject.parse (parser.ts:171:17)
    at example.ts:11:30
```

## Known Issues

- Zod is currently not compatible with `deno bundle` due to [a bug](https://github.com/swc-project/swc/issues/1254) in [SWC](https://swc.rs/), the bundler that Deno uses internally.

