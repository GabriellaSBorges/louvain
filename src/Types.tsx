// TypeScript Definitions in '../Types.ts'

// Representa a estrutura básica dos dados em formato JSON para um grafo
export interface JSONData {
    nodes: Node[];  // Lista de nós do grafo
    edges: Edge[];  // Lista de arestas do grafo
  }
  
  // Representa um nó no grafo, com atributos opcionais
  export interface Node {
    key: string;  // Identificador único para o nó
    attributes?: Record<string, any>;  // Atributos adicionais (como cor, tamanho, etc.)
  }
  
  // Representa uma aresta no grafo
  export interface Edge {
    source: string;  // Nó de origem
    target: string;  // Nó de destino
    attributes?: Record<string, any>;  // Atributos adicionais (como peso, etc.)
  }
  
  // Detalhes sobre comunidades após aplicação do Louvain
  export interface CommunityDetails {
    count: number;  // Número total de comunidades
    communities: Record<string, number>;  // Mapeamento de nós para suas comunidades
  }
  
  // Detalhes de modularidade para um grafo
  export interface modularityDetails {
    count: number;  // Número de classes únicas de modularidade
    classes: Record<string, number>;  // Mapeamento de nós para suas classes de modularidade
  }
  