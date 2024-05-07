import Graph from 'graphology';
import louvain from 'graphology-communities-louvain';
import subgraph from 'graphology-operators/subgraph';
// import { subgraph } from 'graphology-operations';

export function applyLouvainRecursively(graph: Graph, depth: number) {
    let currentGraph = graph;
    let communityHierarchy = [];

    // totalNumberOfNodes = 

    for (let d = 0; d < depth; d++) {
        // Aplicar Louvain no grafo atual
        louvain.assign(currentGraph, { resolution: 1 });
        const communityDetails = louvain.detailed(currentGraph);

        // Atualiza a hierarquia de comunidades
        communityHierarchy[d] = communityDetails.communities;

      
        // Criar um novo grafo para o próximo nível
        const newGraph = new Graph({
            multi: true,
            allowSelfLoops: true,
            type: 'directed',
        });

        let i = 0;
        // Para cada comunidade identificada, cria um subgrafo
        for (const communityId of Object.values(communityDetails.communities)) {
            const nodesInCommunity = Object.keys(communityDetails.communities).filter(
                (nodeId) => communityDetails.communities[nodeId] === communityId
            );

            console.log(communityId, nodesInCommunity.length)

            if (nodesInCommunity.length > 0) {
                const subGrafo = subgraph(currentGraph, nodesInCommunity);

                // Importar dados para o newGraph
                newGraph.import(subGrafo.export());

                if (subGrafo.export()) console.log("OK")
            }
        i++
        }

        console.log("Número de comunidades no nível ", d, communityDetails.count, i)

        // Atualizar o grafo atual para o próximo nível
        currentGraph = newGraph;
    }


    return { graph: currentGraph, communityHierarchy };
}

