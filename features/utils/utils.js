export function parseMenuCategory(menuCategory) {
    // menuCategory: Dresses -> Casual Dresses
    const parts = menuCategory.split('->');

    return parts.map((p) => p.trim());
}

