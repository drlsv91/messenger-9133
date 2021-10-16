import moment from "moment";

export const CLOUDINARY_PUBLIC_URL = "https://api.cloudinary.com/v1_1/oluwaleyevictor/image/upload";

export const getSortedMessages = (messages) => {
    if (!Array.isArray(messages) || messages.length === 0) return messages;

    return messages.sort((prev, next) => {
        return moment.utc(prev.createdAt).diff(next.createdAt);
    });
};