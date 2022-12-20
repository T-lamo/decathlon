import type { ProductCategory } from "$lib/models"
import { categories } from "$lib/recommendation/data"

export function get_product_category(label:string): ProductCategory{
    return categories.filter(data=>data.label==label)[0]
}