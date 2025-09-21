const AlertToFilter = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[400px] border border-primary-100 rounded-2xl bg-gradient-to-br from-primary-50/30 to-primary-100/20">
      <div className="flex flex-col items-center gap-4 text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Configure os filtros para visualizar os dados
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Para exibir os gráficos e mapas, primeiro selecione uma tabela,
            variável, produto e localidade utilizando os filtros acima.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-lg border border-primary-200">
          <svg
            className="w-4 h-4 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs font-medium text-primary-700">
            Use os filtros no canto superior direito
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlertToFilter;
