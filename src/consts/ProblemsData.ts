export const problemsListData = {
  data: [
    {
      id: 1001,
      execution_number: 1002,
      problem_name: 'Keccak Keccak Keccak 256 Hash',
      user_name: 'Polyhedra Network',
      user_avatar: 'https://stake.polyhedra.foundation/logo.png',
      create_time: 'Jul 15, 2024, 16:58:53 (UTC+08:00)',
    },
    {
      id: 1002,
      execution_number: 6732,
      problem_name: 'Poseidon2 Hash M31',
      user_name: 'Polyhedra Network',
      user_avatar: 'https://stake.polyhedra.foundation/logo.png',
      create_time: 'Jul 15, 2024, 18:58:53 (UTC+08:00)',
    },
    {
      id: 1003,
      execution_number: 3600,
      problem_name: 'ECDSA Signature',
      user_name: 'Polyhedra Network',
      user_avatar: 'https://stake.polyhedra.foundation/logo.png',
      create_time: 'Jul 15, 2024, 18:59:53 (UTC+08:00)',
    },
    {
      id: 1004,
      execution_number: 3600,
      problem_name: 'Poseidon2 Hash M31',
      user_name: 'Polyhedra Network',
      user_avatar: 'https://stake.polyhedra.foundation/logo.png',
      create_time: 'Jul 15, 2024, 18:59:53 (UTC+08:00)',
    },
    {
      id: 1005,
      execution_number: 3600,
      problem_name: 'Poseidon2 Hash BN254',
      user_name: 'Polyhedra Network',
      user_avatar: 'https://stake.polyhedra.foundation/logo.png',
      create_time: 'Jul 15, 2024, 18:59:53 (UTC+08:00)',
    },
  ],
  total: 5,
};

export const problemsDetailData = [
  {
    id: 1001,
    execution_number: 1002,
    problem_name: 'Keccak Keccak Keccak 256 Hash',
    user_name: 'Polyhedra Network',
    user_avatar: 'https://stake.polyhedra.foundation/logo.png',
    create_time: 'Jul 15, 2024, 16:58:53 (UTC+08:00)',
    desc: "Your prover program must read bytes from stdin and print bytes to stdout. We will use a special judge program (SPJ) to interact with your prover by providing inputs and checking outputs. The SPJ communicates with the prover through the prover's stdin and stdout. Additionally, the SPJ will invoke your verifier to check your proof.",
    submissionsTableData: [
      {
        id: 1,
        prover_name: 'Alph,algo 1',
        proof_system: 'Expander',
        algorithm: 'algo 1',
        status: 'pending',
        setup_time: 3.5,
        witness_generation_time: 3.5,
        proof_generation_time: 3.5,
        verify_time: 3.5,
        peak_memory: 644,
        proof_size: 542,
      },
      {
        id: 2,
        prover_name: 'Alph,algo 2',
        proof_system: 'Expander',
        algorithm: 'algo 2',
        status: 'running',
        setup_time: 6.5,
        witness_generation_time: 3.5,
        proof_generation_time: 8.5,
        verify_time: 5.5,
        peak_memory: 1044,
        proof_size: 542,
      },
      {
        id: 3,
        prover_name: 'Alph,algo 3',
        proof_system: 'Expander',
        algorithm: 'algo 3',
        status: 'completed',
        setup_time: 12.5,
        witness_generation_time: 6.5,
        proof_generation_time: 10.5,
        verify_time: 3.5,
        peak_memory: 1644,
        proof_size: 202,
      },
      {
        id: 4,
        prover_name: 'beta,algo 4',
        proof_system: 'Expander',
        algorithm: 'algo 4',
        status: 'completed',
        setup_time: 12.5,
        witness_generation_time: 6.5,
        proof_generation_time: 10.5,
        verify_time: 3.5,
        peak_memory: 1644,
        proof_size: 202,
      },
      {
        id: 5,
        prover_name: 'beta,algo 5',
        proof_system: 'Expander',
        algorithm: 'algo 5',
        status: 'completed',
        setup_time: 16.5,
        witness_generation_time: 2.5,
        proof_generation_time: 6.5,
        verify_time: 7.5,
        peak_memory: 1404,
        proof_size: 202,
      },
    ],
  },
  {
    id: 1002,
    execution_number: 6732,
    problem_name: 'Poseidon2 Hash M31',
    user_name: 'Polyhedra Network',
    user_avatar: 'https://stake.polyhedra.foundation/logo.png',
    create_time: 'Jul 15, 2024, 18:58:53 (UTC+08:00)',
    desc: "Your prover program must read bytes from stdin and print bytes to stdout. We will use a special judge program (SPJ) to interact with your prover by providing inputs and checking outputs. The SPJ communicates with the prover through the prover's stdin and stdout. Additionally, the SPJ will invoke your verifier to check your proof.",
    submissionsTableData: [
      {
        id: 1,
        prover_name: 'beta,algo 1',
        proof_system: 'Expander',
        algorithm: 'algo 1',
        status: 'pending',
        setup_time: 5.5,
        witness_generation_time: 5,
        proof_generation_time: 2.5,
        verify_time: 7,
        peak_memory: 144,
        proof_size: 342,
      },
      {
        id: 2,
        prover_name: 'gamma,algo 2',
        proof_system: 'Expander',
        algorithm: 'algo 2',
        status: 'running',
        setup_time: 4.5,
        witness_generation_time: 7.5,
        proof_generation_time: 2.5,
        verify_time: 8.5,
        peak_memory: 444,
        proof_size: 842,
      },
      {
        id: 3,
        prover_name: 'gamma,algo 3',
        proof_system: 'Expander',
        algorithm: 'algo 3',
        status: 'completed',
        setup_time: 5.5,
        witness_generation_time: 7.5,
        proof_generation_time: 9.5,
        verify_time: 8.5,
        peak_memory: 944,
        proof_size: 542,
      },
      {
        id: 4,
        prover_name: 'gamma,algo 4',
        proof_system: 'Expander',
        algorithm: 'algo 4',
        status: 'completed',
        setup_time: 4.5,
        witness_generation_time: 6.5,
        proof_generation_time: 4.5,
        verify_time: 6.5,
        peak_memory: 1944,
        proof_size: 552,
      },
      {
        id: 5,
        prover_name: 'Alph,algo 5',
        proof_system: 'Expander',
        algorithm: 'algo 5',
        status: 'completed',
        setup_time: 7.5,
        witness_generation_time: 3.5,
        proof_generation_time: 4.5,
        verify_time: 6.5,
        peak_memory: 1944,
        proof_size: 552,
      },
    ],
  },
  {
    id: 1003,
    execution_number: 3600,
    problem_name: 'ECDSA Signature',
    user_name: 'Polyhedra Network',
    user_avatar: 'https://stake.polyhedra.foundation/logo.png',
    create_time: 'Jul 15, 2024, 18:59:53 (UTC+08:00)',
    desc: "Your prover program must read bytes from stdin and print bytes to stdout. We will use a special judge program (SPJ) to interact with your prover by providing inputs and checking outputs. The SPJ communicates with the prover through the prover's stdin and stdout. Additionally, the SPJ will invoke your verifier to check your proof.",
    submissionsTableData: [
      {
        id: 1,
        prover_name: 'Alph,algo 1',
        proof_system: 'Expander',
        algorithm: 'algo 1',
        status: 'pending',
        setup_time: 4.5,
        witness_generation_time: 2.5,
        proof_generation_time: 5.5,
        verify_time: 7.5,
        peak_memory: 844,
        proof_size: 342,
      },
      {
        id: 2,
        prover_name: 'Alph,algo 2',
        proof_system: 'Expander',
        algorithm: 'algo 2',
        status: 'running',
        setup_time: 2.5,
        witness_generation_time: 5.5,
        proof_generation_time: 4.5,
        verify_time: 4.5,
        peak_memory: 844,
        proof_size: 742,
      },
      {
        id: 3,
        prover_name: 'beta,algo 3',
        proof_system: 'Expander',
        algorithm: 'algo 3',
        status: 'completed',
        setup_time: 13.5,
        witness_generation_time: 5.5,
        proof_generation_time: 3.5,
        verify_time: 8.5,
        peak_memory: 844,
        proof_size: 342,
      },
      {
        id: 4,
        prover_name: 'beta,algo 4',
        proof_system: 'Expander',
        algorithm: 'algo 4',
        status: 'completed',
        setup_time: 4.5,
        witness_generation_time: 6.5,
        proof_generation_time: 4.5,
        verify_time: 6.5,
        peak_memory: 1944,
        proof_size: 552,
      },
      {
        id: 5,
        prover_name: 'beta,algo 5',
        proof_system: 'Expander',
        algorithm: 'algo 5',
        status: 'completed',
        setup_time: 7.5,
        witness_generation_time: 3.5,
        proof_generation_time: 4.5,
        verify_time: 6.5,
        peak_memory: 1944,
        proof_size: 552,
      },
    ],
  },
  {
    id: 1004,
    execution_number: 3600,
    problem_name: 'Poseidon2 Hash M31',
    user_name: 'Polyhedra Network',
    user_avatar: 'https://stake.polyhedra.foundation/logo.png',
    create_time: 'Jul 15, 2024, 18:59:53 (UTC+08:00)',
    desc: "Your prover program must read bytes from stdin and print bytes to stdout. We will use a special judge program (SPJ) to interact with your prover by providing inputs and checking outputs. The SPJ communicates with the prover through the prover's stdin and stdout. Additionally, the SPJ will invoke your verifier to check your proof.",
    submissionsTableData: [
      {
        id: 1,
        prover_name: 'gamma,algo 1',
        proof_system: 'Expander',
        algorithm: 'algo 1',
        status: 'pending',
        setup_time: 4.5,
        witness_generation_time: 2.5,
        proof_generation_time: 5.5,
        verify_time: 7.5,
        peak_memory: 844,
        proof_size: 342,
      },
      {
        id: 2,
        prover_name: 'gamma,algo 2',
        proof_system: 'Expander',
        algorithm: 'algo 2',
        status: 'running',
        setup_time: 2.5,
        witness_generation_time: 5.5,
        proof_generation_time: 4.5,
        verify_time: 4.5,
        peak_memory: 844,
        proof_size: 742,
      },
      {
        id: 3,
        prover_name: 'gamma,algo 3',
        proof_system: 'Expander',
        algorithm: 'algo 3',
        status: 'completed',
        setup_time: 13.5,
        witness_generation_time: 5.5,
        proof_generation_time: 3.5,
        verify_time: 8.5,
        peak_memory: 844,
        proof_size: 342,
      },
      {
        id: 4,
        prover_name: 'Alph,algo 4',
        proof_system: 'Expander',
        algorithm: 'algo 4',
        status: 'completed',
        setup_time: 4.5,
        witness_generation_time: 6.5,
        proof_generation_time: 4.5,
        verify_time: 6.5,
        peak_memory: 1944,
        proof_size: 552,
      },
      {
        id: 5,
        prover_name: 'Alph,algo 5',
        proof_system: 'Expander',
        algorithm: 'algo 5',
        status: 'completed',
        setup_time: 7.5,
        witness_generation_time: 3.5,
        proof_generation_time: 4.5,
        verify_time: 6.5,
        peak_memory: 1944,
        proof_size: 552,
      },
    ],
  },
  {
    id: 1005,
    execution_number: 3600,
    problem_name: 'Poseidon2 Hash BN254',
    user_name: 'Polyhedra Network',
    user_avatar: 'https://stake.polyhedra.foundation/logo.png',
    create_time: 'Jul 15, 2024, 18:59:53 (UTC+08:00)',
    desc: "Your prover program must read bytes from stdin and print bytes to stdout. We will use a special judge program (SPJ) to interact with your prover by providing inputs and checking outputs. The SPJ communicates with the prover through the prover's stdin and stdout. Additionally, the SPJ will invoke your verifier to check your proof.",
    submissionsTableData: [
      {
        id: 1,
        prover_name: 'Alph,algo 1',
        proof_system: 'Expander',
        algorithm: 'algo 1',
        status: 'pending',
        setup_time: 4.5,
        witness_generation_time: 2.5,
        proof_generation_time: 5.5,
        verify_time: 7.5,
        peak_memory: 844,
        proof_size: 342,
      },
      {
        id: 2,
        prover_name: 'beta,algo 2',
        proof_system: 'Expander',
        algorithm: 'algo 2',
        status: 'running',
        setup_time: 2.5,
        witness_generation_time: 5.5,
        proof_generation_time: 4.5,
        verify_time: 4.5,
        peak_memory: 844,
        proof_size: 742,
      },
      {
        id: 3,
        prover_name: 'beta,algo 3',
        proof_system: 'Expander',
        algorithm: 'algo 3',
        status: 'completed',
        setup_time: 13.5,
        witness_generation_time: 5.5,
        proof_generation_time: 3.5,
        verify_time: 8.5,
        peak_memory: 844,
        proof_size: 342,
      },
      {
        id: 4,
        prover_name: 'beta,algo 4',
        proof_system: 'Expander',
        algorithm: 'algo 4',
        status: 'completed',
        setup_time: 4.5,
        witness_generation_time: 6.5,
        proof_generation_time: 4.5,
        verify_time: 6.5,
        peak_memory: 1944,
        proof_size: 552,
      },
      {
        id: 5,
        prover_name: 'gamma,algo 5',
        proof_system: 'Expander',
        algorithm: 'algo 5',
        status: 'completed',
        setup_time: 7.5,
        witness_generation_time: 3.5,
        proof_generation_time: 4.5,
        verify_time: 6.5,
        peak_memory: 1944,
        proof_size: 552,
      },
    ],
  },
];
