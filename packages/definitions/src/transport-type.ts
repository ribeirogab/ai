import { z } from 'zod';

export const TRANSPORT_TYPE_SCHEMA = z.union([
  z.literal('stdio'),
  z.literal('sse'),
]);

export type TransportType = z.infer<typeof TRANSPORT_TYPE_SCHEMA>;
