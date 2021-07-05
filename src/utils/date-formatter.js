exports.dateFormatter = (dateInput) => {
    console.log(dateInput);
    const isoFormat = dateInput.toISOString().slice(0,10);
    return isoFormat;
};

