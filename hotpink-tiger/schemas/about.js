export default {
    name: "about",
    title: "About",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },

        {
            name: "desc",
            title: "Desc",
            type: "string",
        },
    ],
};
