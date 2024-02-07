namespace RetroReserve.Models
{

    public class Response
    {
        public string ResponseText { get; set; }

        public ResponseStatus StatusCode { get; set; }
    }
    public enum ResponseStatus
    {

        SUCCESS = 1,
        FAILED = 2,
    }

    public class Response<T>
    {
        public string ResponseText { get; set; }

        public ResponseStatus StatusCode { get; set; }

        public T Result { get; set; }
        public Response()
        {
            StatusCode = ResponseStatus.FAILED;
            ResponseText = ResponseStatus.FAILED.ToString();
        }
    }




}
