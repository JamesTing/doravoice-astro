// 从 `astro:content` 导入辅助工具
import { z, defineCollection } from "astro:content";
// 为每一个集合定义一个 `type` 和 `schema`
const docsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        category: z.string().optional(),
        order: z.number().optional(),
        pubDate: z.date(),
        description: z.string().optional(),
        author: z.string().optional(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        tags: z.array(z.string()).optional()
    })
});
// 导出一个单独的 `collections` 对象来注册你的集合
export const collections = {
    docs: docsCollection,
};