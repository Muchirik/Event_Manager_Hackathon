export function validateEventForm(data) {
    const errors = {};
    
    if (!data.title || data.title.trim() === '') {
        errors.title = 'Title is required';
    }
    
    if (!data.description || data.description.trim() === '') {
        errors.description = 'Description is required';
    }
    
    if (!data.date) {
        errors.date = 'Date is required';
    } else if (new Date(data.date) < new Date()) {
        errors.date = 'Date cannot be in the past';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

export function validateImageUpload(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    
    if (!file) {
        return { isValid: false, message: 'Image file is required' };
    }
    
    if (!validTypes.includes(file.type)) {
        return { isValid: false, message: 'Invalid image type. Only JPEG, PNG, and GIF are allowed.' };
    }
    
    return { isValid: true };
}