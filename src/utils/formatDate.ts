export const formatDate = (date: Date) => {
    const daysOfWeek = ['Domingo', 'Segunda', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    const monthsOfYear = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    const dayName = daysOfWeek[date.getDay()];
    const day = date.getDate().toString().padStart(2, '0');
    const monthName = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} de ${monthName} de ${year}`;
}