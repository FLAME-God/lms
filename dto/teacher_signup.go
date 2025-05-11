package dto

type TeacherSignupRequest struct {
	// User fields
	FullName string `json:"fullName" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
	Phone    int64  `json:"phone" binding:"required"`
	Role     string `json:"role" binding:"required,oneof=TEACHER"`

	// Teacher fields
	Expertise     string `json:"expertise" binding:"required"`
	Experience    int    `json:"experience" binding:"required"`
	Qualification string `json:"qualification" binding:"required"`
	AccountNumber string `json:"accountNumber" binding:"required"`
	IfscCode      string `json:"ifscCode" binding:"required"`
	BankName      string `json:"bankName" binding:"required"`
	BranchName    string `json:"branchName" binding:"required"`
}
