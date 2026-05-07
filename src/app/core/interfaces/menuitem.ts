export interface MenuItem {

    text: string
    imageUrl: string,
    url: string,
    target: string,
    level: number,
    children: MenuItem[],
    navigationItemID: number
}