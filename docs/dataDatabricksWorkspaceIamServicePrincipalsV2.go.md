# `dataDatabricksWorkspaceIamServicePrincipalsV2` Submodule <a name="`dataDatabricksWorkspaceIamServicePrincipalsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceIamServicePrincipalsV2 <a name="DataDatabricksWorkspaceIamServicePrincipalsV2" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2 databricks_workspace_iam_service_principals_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

datadatabricksworkspaceiamserviceprincipalsv2.NewDataDatabricksWorkspaceIamServicePrincipalsV2(scope Construct, id *string, config DataDatabricksWorkspaceIamServicePrincipalsV2Config) DataDatabricksWorkspaceIamServicePrincipalsV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config">DataDatabricksWorkspaceIamServicePrincipalsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config">DataDatabricksWorkspaceIamServicePrincipalsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceIamServicePrincipalsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

datadatabricksworkspaceiamserviceprincipalsv2.DataDatabricksWorkspaceIamServicePrincipalsV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

datadatabricksworkspaceiamserviceprincipalsv2.DataDatabricksWorkspaceIamServicePrincipalsV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

datadatabricksworkspaceiamserviceprincipalsv2.DataDatabricksWorkspaceIamServicePrincipalsV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

datadatabricksworkspaceiamserviceprincipalsv2.DataDatabricksWorkspaceIamServicePrincipalsV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksWorkspaceIamServicePrincipalsV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksWorkspaceIamServicePrincipalsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksWorkspaceIamServicePrincipalsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceIamServicePrincipalsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.servicePrincipals">ServicePrincipals</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference</a>

---

##### `ServicePrincipals`<sup>Required</sup> <a name="ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.servicePrincipals"></a>

```go
func ServicePrincipals() DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceIamServicePrincipalsV2Config <a name="DataDatabricksWorkspaceIamServicePrincipalsV2Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

&datadatabricksworkspaceiamserviceprincipalsv2.DataDatabricksWorkspaceIamServicePrincipalsV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#filter DataDatabricksWorkspaceIamServicePrincipalsV2#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#page_size DataDatabricksWorkspaceIamServicePrincipalsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#filter DataDatabricksWorkspaceIamServicePrincipalsV2#filter}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#page_size DataDatabricksWorkspaceIamServicePrincipalsV2#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}.

---

### DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

&datadatabricksworkspaceiamserviceprincipalsv2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}.

---

### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

&datadatabricksworkspaceiamserviceprincipalsv2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals {
	ServicePrincipalId: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#service_principal_id DataDatabricksWorkspaceIamServicePrincipalsV2#service_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}. |

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.servicePrincipalId"></a>

```go
ServicePrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#service_principal_id DataDatabricksWorkspaceIamServicePrincipalsV2#service_principal_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}.

---

### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

&datadatabricksworkspaceiamserviceprincipalsv2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

datadatabricksworkspaceiamserviceprincipalsv2.NewDataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

datadatabricksworkspaceiamserviceprincipalsv2.NewDataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.get"></a>

```go
func Get(index *f64) DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

datadatabricksworkspaceiamserviceprincipalsv2.NewDataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountSpStatus">AccountSpStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AccountSpStatus`<sup>Required</sup> <a name="AccountSpStatus" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountSpStatus"></a>

```go
func AccountSpStatus() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference</a>

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals</a>

---


### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamserviceprincipalsv2"

datadatabricksworkspaceiamserviceprincipalsv2.NewDataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



