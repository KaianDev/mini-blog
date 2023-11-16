export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-Br", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour12: false,
        minute: "2-digit",
        hour: "2-digit",
    });
};
