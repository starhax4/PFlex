interface ImgBBResponse {
    success: boolean;
    data: {
        url: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any; // for other properties that might exist in the response
    };
}

export const uploadImage = async (file: File): Promise<string | undefined> => {
    const apiKey: string = "b081db77866513eae547954869694da5" ; // Replace with your API key
    const formData: FormData = new FormData();

    formData.append("key", apiKey);
    formData.append("image", file);
    try {
        const response: Response = await fetch("https://api.imgbb.com/1/upload", {
            method: "POST",
            body: formData,
        });

        const data: ImgBBResponse = await response.json();

        if (data.success) {
            console.log("Uploaded Image URL:", data.data.url); // Public URL of the image
            return data.data.url;
        } else {
            console.error("Upload failed:", data);
        }
    } catch (error) {
        console.log("Error uploading image ", error);
    }
};
