nextflow.enable.dsl = 2

include { proteinQCSeqComposition } from '../proteinqc-seq-composition'
include { proteinQCESM1v } from '../proteinqc-esm1v'
include { proteinQCESMIF } from '../proteinqc-esmif'
include { proteinQCPepPatch } from '../proteinqc-pep-patch'
include { proteinQCDSSP } from '../proteinqc-dssp'
include { proteinQCProteinSol } from '../proteinqc-proteinsol'


process createInputFolders {
    executor 'local'
    input:
        path inputs
    output:
        path pdb_dir, emit: pdb_dir
    script:
    """
        mkdir pdb_dir
        cp ${inputs} pdb_dir
    """
}

workflow ProteinQC {
  take:
    batches
    tools
    chains
  main:
    for (tool in tools) {
        switch (tool) {
            case 'seq_composition':
                proteinQCSeqComposition(batches, chains)
                break
            case 'esm_1v':
                [
                    'esm_models_path',
                ].each { param ->
                    params[param] = null
                    if (!params[param]) {
                        throw new IllegalArgumentException("Argument --${param} is required!")
                    }
                }
                proteinQCESM1v(batches, chains, params.esm_models_path)
                break
            case 'dssp':
                proteinQCDSSP(batches, chains)
                break
            case 'esm_if':
                [
                    'esm_models_path',
                ].each { param ->
                    params[param] = null
                    if (!params[param]) {
                        throw new IllegalArgumentException("Argument --${param} is required!")
                    }
                }
                proteinQCESMIF(batches, chains, params.esm_models_path)
                break
            case 'peppatch':
                [
                    'peppatch_config_path',
                    'hydrophobicity_scale_path',
                ].each { param ->
                    params[param] = null
                    if (!params[param]) {
                        throw new IllegalArgumentException("Argument --${param} is required!")
                    }
                }
                proteinQCPepPatch(batches, chains, params.peppatch_config_path, params.hydrophobicity_scale_path)
                break
            case 'proteinsol':
                proteinQCProteinSol(batches, chains)
                break
            default:
                throw new IllegalArgumentException("Tool ${tool} is not supported")
        }
    }
}

workflow {
    [
        'tools',
        'input_pdb',
        'chains',
    ].each { param ->
        params[param] = null
        if (!params[param]) {
            throw new IllegalArgumentException("Argument --${param} is required!")
        }
    }
    println "Nextflow version: ${nextflow.version}"
    println "Running ProteinQC for: ${params.input_pdb}"
    def pdbPaths
    if (params.input_pdb.endsWith('.txt')) {
        pdbPaths = Channel.fromList(file(params.input_pdb).readLines())
    } else if (params.input_pdb.endsWith('.pdb')) {
        pdbPaths = Channel.fromPath(params.input_pdb)
    } else if (params.input_pdb.endsWith('/')) {
        pdbPaths = Channel.fromPath(params.input_pdb + '*.pdb')
    } else {
        throw new IllegalArgumentException("Input file must be a .pdb file, a .txt file with a list of .pdb files, or a directory ending with /, got: ${params.input_pdb}")
    }
    def tools = params.tools.split(',')
    def fileList = pdbPaths.collate(params.batch_size)
    createInputFolders(fileList)
    indexes = Channel.of(1..(1000000.intdiv(params.batch_size)))
    batches = createInputFolders.out.pdb_dir.merge(indexes, { pdb_dir, idx -> ["contig1_batch${idx}", pdb_dir] })

    ProteinQC(batches, tools, params.chains)
}
