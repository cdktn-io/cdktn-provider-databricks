# `dataDatabricksAwsAssumeRolePolicy` Submodule <a name="`dataDatabricksAwsAssumeRolePolicy` Submodule" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsAssumeRolePolicy <a name="DataDatabricksAwsAssumeRolePolicy" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy databricks_aws_assume_role_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksawsassumerolepolicy"

datadatabricksawsassumerolepolicy.NewDataDatabricksAwsAssumeRolePolicy(scope Construct, id *string, config DataDatabricksAwsAssumeRolePolicyConfig) DataDatabricksAwsAssumeRolePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig">DataDatabricksAwsAssumeRolePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig">DataDatabricksAwsAssumeRolePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetAwsPartition">ResetAwsPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetDatabricksAccountId">ResetDatabricksAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetForLogDelivery">ResetForLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAwsPartition` <a name="ResetAwsPartition" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetAwsPartition"></a>

```go
func ResetAwsPartition()
```

##### `ResetDatabricksAccountId` <a name="ResetDatabricksAccountId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetDatabricksAccountId"></a>

```go
func ResetDatabricksAccountId()
```

##### `ResetForLogDelivery` <a name="ResetForLogDelivery" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetForLogDelivery"></a>

```go
func ResetForLogDelivery()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAwsAssumeRolePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksawsassumerolepolicy"

datadatabricksawsassumerolepolicy.DataDatabricksAwsAssumeRolePolicy_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksawsassumerolepolicy"

datadatabricksawsassumerolepolicy.DataDatabricksAwsAssumeRolePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksawsassumerolepolicy"

datadatabricksawsassumerolepolicy.DataDatabricksAwsAssumeRolePolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksawsassumerolepolicy"

datadatabricksawsassumerolepolicy.DataDatabricksAwsAssumeRolePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAwsAssumeRolePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAwsAssumeRolePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAwsAssumeRolePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsAssumeRolePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.awsPartitionInput">AwsPartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.databricksAccountIdInput">DatabricksAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forLogDeliveryInput">ForLogDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.awsPartition">AwsPartition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.databricksAccountId">DatabricksAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forLogDelivery">ForLogDelivery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `AwsPartitionInput`<sup>Optional</sup> <a name="AwsPartitionInput" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.awsPartitionInput"></a>

```go
func AwsPartitionInput() *string
```

- *Type:* *string

---

##### `DatabricksAccountIdInput`<sup>Optional</sup> <a name="DatabricksAccountIdInput" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.databricksAccountIdInput"></a>

```go
func DatabricksAccountIdInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `ForLogDeliveryInput`<sup>Optional</sup> <a name="ForLogDeliveryInput" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forLogDeliveryInput"></a>

```go
func ForLogDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AwsPartition`<sup>Required</sup> <a name="AwsPartition" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.awsPartition"></a>

```go
func AwsPartition() *string
```

- *Type:* *string

---

##### `DatabricksAccountId`<sup>Required</sup> <a name="DatabricksAccountId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.databricksAccountId"></a>

```go
func DatabricksAccountId() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `ForLogDelivery`<sup>Required</sup> <a name="ForLogDelivery" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.forLogDelivery"></a>

```go
func ForLogDelivery() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsAssumeRolePolicyConfig <a name="DataDatabricksAwsAssumeRolePolicyConfig" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksawsassumerolepolicy"

&datadatabricksawsassumerolepolicy.DataDatabricksAwsAssumeRolePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExternalId: *string,
	AwsPartition: *string,
	DatabricksAccountId: *string,
	ForLogDelivery: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy#external_id DataDatabricksAwsAssumeRolePolicy#external_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.awsPartition">AwsPartition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy#aws_partition DataDatabricksAwsAssumeRolePolicy#aws_partition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.databricksAccountId">DatabricksAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy#databricks_account_id DataDatabricksAwsAssumeRolePolicy#databricks_account_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.forLogDelivery">ForLogDelivery</a></code> | <code>interface{}</code> | Grant AssumeRole to Databricks SaasUsageDeliveryRole instead of root account. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy#id DataDatabricksAwsAssumeRolePolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy#external_id DataDatabricksAwsAssumeRolePolicy#external_id}.

---

##### `AwsPartition`<sup>Optional</sup> <a name="AwsPartition" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.awsPartition"></a>

```go
AwsPartition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy#aws_partition DataDatabricksAwsAssumeRolePolicy#aws_partition}.

---

##### `DatabricksAccountId`<sup>Optional</sup> <a name="DatabricksAccountId" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.databricksAccountId"></a>

```go
DatabricksAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy#databricks_account_id DataDatabricksAwsAssumeRolePolicy#databricks_account_id}.

---

##### `ForLogDelivery`<sup>Optional</sup> <a name="ForLogDelivery" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.forLogDelivery"></a>

```go
ForLogDelivery interface{}
```

- *Type:* interface{}

Grant AssumeRole to Databricks SaasUsageDeliveryRole instead of root account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy#for_log_delivery DataDatabricksAwsAssumeRolePolicy#for_log_delivery}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAwsAssumeRolePolicy.DataDatabricksAwsAssumeRolePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/aws_assume_role_policy#id DataDatabricksAwsAssumeRolePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



