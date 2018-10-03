// import "a_names.js";
// import "b_names.js";
// import "c_names.js";
// import "d_names.js";
// import "e_names.js";
// import "f_names.js";
// import "g_names.js";
// import "h_names.js";
// import "i_names.js";
// import "j_names.js";
// import "k_names.js";
// import "l_names.js";
// import "m_names.js";
// import "n_names.js";
// import "o_names.js";
// import "p_names.js";
// import "r_names.js";
// import "s_names.js";
   
   var allNames = a_names.concat(b_names, c_names, d_names, e_names, f_names, g_names, h_names, i_names, j_names, k_names
        , l_names, m_names
        , n_names, o_names
        , p_names
        //, q_names
        , r_names, s_names
        //, t_names, u_names, v_names, w_names, x_names, y_names, z_names
        );

        function compare(a,b) {
            if (a.name < b.name)
              return -1;
            if (a.name > b.name)
              return 1;
            return 0;
          }
    
    allNames.sort(compare);