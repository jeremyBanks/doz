import defaultZod from './mod.ts';
import * as starZod from './mod.ts';

Deno.test('zod/deno/mod.ts members and types imported from default', () => {
  const _: defaultZod.ZodTypeAny = defaultZod.record(defaultZod.bigint());
});

Deno.test('zod/deno/mod.ts members and types imported from *', () => {
  const _: starZod.ZodTypeAny = starZod.record(starZod.bigint());
});
