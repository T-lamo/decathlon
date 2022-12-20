import { decathlon_products, few_products, segmentations } from "./data";
import type { IProfiling } from "./interface";
import { Profiling } from "./model";


export const decathlon_profiling: IProfiling = new Profiling({axes: segmentations, clic_products: few_products, all_products: decathlon_products})