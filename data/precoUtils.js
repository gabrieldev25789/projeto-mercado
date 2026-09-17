// Interpreta o campo "preco" dos produtos e devolve como calcular o total.
// Suporta: "54,90 / kg", "2,49 / unid", "1,99 / maço" e preço fixo tipo "8,99".
export function parsePreco(preco) {
  const partes = preco.split(" / ")
  const valorNumerico = Number(partes[0].replace(",", "."))
  const unidade = partes[1] || "un"

  if (unidade === "kg") {
    return {
      modo: "peso",       // quantidade é digitada/escolhida em gramas
      unidade: "kg",
      calcular: (valor) => (valor / 1000) * valorNumerico,
    }
  }

  return {
    modo: "unidade",      // quantidade é digitada/escolhida em unidades inteiras
    unidade,
    calcular: (valor) => valor * valorNumerico,
  }
}