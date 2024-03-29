﻿using API.Repository.Interface;
using System.Data.SqlClient;
using System.Data;
using API.Connection;
using Dapper;

namespace API.Repository.Impliments
{
    public class DapperService : IDapperService
    {
        private readonly string Constr;
        public DapperService(IConnectionString _connectionString)
        {
            Constr = _connectionString.ConnectionString;
        }

        public async Task<int> Insert(object entity, string storedProcedure)
        {
            using (var connection = new SqlConnection(Constr))
            {
                connection.Open();
                return await connection.ExecuteAsync(storedProcedure, entity);
            }
        }

        public int Delete(object id, string query)
        {
            using (var connection = new SqlConnection(Constr))
            {
                connection.Open();
                return connection.Execute(query,id);
            }
        }

        public async Task<T> GetAsync<T>(string sp, object parms = null, CommandType commandType = CommandType.StoredProcedure)
        {
            T result;

            try
            {
                using (IDbConnection db = new SqlConnection(Constr))
                {
                    var response = await db.QueryAsync<T>(sp, parms, commandType: commandType);
                    result = response.FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return result;
        }
        public T GetById<T>(object id, string query)
        {
            using (var connection = new SqlConnection(Constr))
            {
                connection.Open();
                return connection.QueryFirstOrDefault<T>(query,id);
            }
        }
        public IEnumerable<T> GetItemsById<T>(object parms, string query)
        {
            using (var connection = new SqlConnection(Constr))
            {
                connection.Open();
                return connection.Query<T>(query, parms);
            }
        }



        public IEnumerable<T> GetAll<T>(string query)
        {
            using (var connection = new SqlConnection(Constr))
            {
                connection.Open();
                return connection.Query<T>(query);
            }
        }

        public int Update(object entity, string storedProcedure)
        {
            using (var connection = new SqlConnection(Constr))
            {
                connection.Open();
                return connection.Execute(storedProcedure, entity);
            }
        }
    }
}
