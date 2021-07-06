exports.dateFormatter = (dateInput) => {
    const isoFormat = dateInput.toISOString().slice(0,10);
    return isoFormat;
};

