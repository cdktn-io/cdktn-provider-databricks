# `dataDatabricksEnvironmentsWorkspaceBaseEnvironment` Submodule <a name="`dataDatabricksEnvironmentsWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironment <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment databricks_environments_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksenvironmentsworkspacebaseenvironment"

datadatabricksenvironmentsworkspacebaseenvironment.NewDataDatabricksEnvironmentsWorkspaceBaseEnvironment(scope Construct, id *string, config DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig) DataDatabricksEnvironmentsWorkspaceBaseEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksenvironmentsworkspacebaseenvironment"

datadatabricksenvironmentsworkspacebaseenvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksenvironmentsworkspacebaseenvironment"

datadatabricksenvironmentsworkspacebaseenvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksenvironmentsworkspacebaseenvironment"

datadatabricksenvironmentsworkspacebaseenvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksenvironmentsworkspacebaseenvironment"

datadatabricksenvironmentsworkspacebaseenvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksEnvironmentsWorkspaceBaseEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksEnvironmentsWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEnvironmentsWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType">BaseEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.creatorUserId">CreatorUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType">EffectiveBaseEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.filepath">Filepath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.isDefault">IsDefault</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId">LastUpdatedUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BaseEnvironmentType`<sup>Required</sup> <a name="BaseEnvironmentType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType"></a>

```go
func BaseEnvironmentType() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CreatorUserId`<sup>Required</sup> <a name="CreatorUserId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.creatorUserId"></a>

```go
func CreatorUserId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveBaseEnvironmentType`<sup>Required</sup> <a name="EffectiveBaseEnvironmentType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType"></a>

```go
func EffectiveBaseEnvironmentType() *string
```

- *Type:* *string

---

##### `Filepath`<sup>Required</sup> <a name="Filepath" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.filepath"></a>

```go
func Filepath() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastUpdatedUserId`<sup>Required</sup> <a name="LastUpdatedUserId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId"></a>

```go
func LastUpdatedUserId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.spec"></a>

```go
func Spec() DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksenvironmentsworkspacebaseenvironment"

&datadatabricksenvironmentsworkspacebaseenvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#name DataDatabricksEnvironmentsWorkspaceBaseEnvironment#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironment#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#name DataDatabricksEnvironmentsWorkspaceBaseEnvironment#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironment#provider_config}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksenvironmentsworkspacebaseenvironment"

&datadatabricksenvironmentsworkspacebaseenvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironment#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironment#workspace_id}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksenvironmentsworkspacebaseenvironment"

&datadatabricksenvironmentsworkspacebaseenvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec {
	Dependencies: *[]*string,
	EnvironmentVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#dependencies DataDatabricksEnvironmentsWorkspaceBaseEnvironment#dependencies}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec.property.environmentVersion">EnvironmentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#environment_version DataDatabricksEnvironmentsWorkspaceBaseEnvironment#environment_version}. |

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec.property.dependencies"></a>

```go
Dependencies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#dependencies DataDatabricksEnvironmentsWorkspaceBaseEnvironment#dependencies}.

---

##### `EnvironmentVersion`<sup>Optional</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec.property.environmentVersion"></a>

```go
EnvironmentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/environments_workspace_base_environment#environment_version DataDatabricksEnvironmentsWorkspaceBaseEnvironment#environment_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksenvironmentsworkspacebaseenvironment"

datadatabricksenvironmentsworkspacebaseenvironment.NewDataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabricksenvironmentsworkspacebaseenvironment"

datadatabricksenvironmentsworkspacebaseenvironment.NewDataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetEnvironmentVersion">ResetEnvironmentVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetDependencies"></a>

```go
func ResetDependencies()
```

##### `ResetEnvironmentVersion` <a name="ResetEnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetEnvironmentVersion"></a>

```go
func ResetEnvironmentVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersionInput">EnvironmentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersion">EnvironmentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependenciesInput"></a>

```go
func DependenciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVersionInput`<sup>Optional</sup> <a name="EnvironmentVersionInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersionInput"></a>

```go
func EnvironmentVersionInput() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependencies"></a>

```go
func Dependencies() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVersion`<sup>Required</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersion"></a>

```go
func EnvironmentVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironment.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentSpec</a>

---



