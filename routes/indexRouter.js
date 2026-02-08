const links = [
    { href: "/", text: "Home"},
    { href: "/new", text: "Add New Message"}
];

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/messages/:index", (req, res) => {
    const message = messages[req.params.index];

    if (!message) {
        res.status(404).send("Message not found...");
    }

    res.render("message", { message: message , links: links});
});

indexRouter.get("/new", (req, res) => {
    res.render("form", { title: "Add New Message", links: links });
});

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Message Board", messages: messages, links: links });
});

indexRouter.post("/new", (req, res) => {
    const { messageUser, messageText } = req.body;

    messages.push({ text: messageText, user: messageUser, added: new Date() });

    res.redirect("/");
});

indexRouter.use((req, res) => res.status(404).send("ERROR 404: NOT FOUND"));

module.exports = indexRouter;