import { z } from 'zod';

export const TRANSPORT_TYPE_SCHEMA = z.literal('stdio');

export type TransportType = z.infer<typeof TRANSPORT_TYPE_SCHEMA>;
