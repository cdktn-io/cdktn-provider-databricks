# `dataDatabricksServicePrincipals` Submodule <a name="`dataDatabricksServicePrincipals` Submodule" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipals <a name="DataDatabricksServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals databricks_service_principals}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

datadatabricksserviceprincipals.NewDataDatabricksServicePrincipals(scope Construct, id *string, config DataDatabricksServicePrincipalsConfig) DataDatabricksServicePrincipals
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig">DataDatabricksServicePrincipalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig">DataDatabricksServicePrincipalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putServicePrincipals">PutServicePrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApi">ResetApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApplicationIds">ResetApplicationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetServicePrincipals">ResetServicePrincipals</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksServicePrincipalsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

---

##### `PutServicePrincipals` <a name="PutServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putServicePrincipals"></a>

```go
func PutServicePrincipals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putServicePrincipals.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApi` <a name="ResetApi" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApi"></a>

```go
func ResetApi()
```

##### `ResetApplicationIds` <a name="ResetApplicationIds" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApplicationIds"></a>

```go
func ResetApplicationIds()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetDisplayNameContains"></a>

```go
func ResetDisplayNameContains()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetServicePrincipals` <a name="ResetServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetServicePrincipals"></a>

```go
func ResetServicePrincipals()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksServicePrincipals resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

datadatabricksserviceprincipals.DataDatabricksServicePrincipals_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

datadatabricksserviceprincipals.DataDatabricksServicePrincipals_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

datadatabricksserviceprincipals.DataDatabricksServicePrincipals_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

datadatabricksserviceprincipals.DataDatabricksServicePrincipals_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksServicePrincipals resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksServicePrincipals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksServicePrincipals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference">DataDatabricksServicePrincipalsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipals">ServicePrincipals</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList">DataDatabricksServicePrincipalsServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.apiInput">ApiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIdsInput">ApplicationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipalsInput">ServicePrincipalsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.api">Api</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIds">ApplicationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksServicePrincipalsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference">DataDatabricksServicePrincipalsProviderConfigOutputReference</a>

---

##### `ServicePrincipals`<sup>Required</sup> <a name="ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipals"></a>

```go
func ServicePrincipals() DataDatabricksServicePrincipalsServicePrincipalsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList">DataDatabricksServicePrincipalsServicePrincipalsList</a>

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.apiInput"></a>

```go
func ApiInput() *string
```

- *Type:* *string

---

##### `ApplicationIdsInput`<sup>Optional</sup> <a name="ApplicationIdsInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIdsInput"></a>

```go
func ApplicationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContainsInput"></a>

```go
func DisplayNameContainsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfigInput"></a>

```go
func ProviderConfigInput() DataDatabricksServicePrincipalsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

---

##### `ServicePrincipalsInput`<sup>Optional</sup> <a name="ServicePrincipalsInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipalsInput"></a>

```go
func ServicePrincipalsInput() interface{}
```

- *Type:* interface{}

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.api"></a>

```go
func Api() *string
```

- *Type:* *string

---

##### `ApplicationIds`<sup>Required</sup> <a name="ApplicationIds" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIds"></a>

```go
func ApplicationIds() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContains"></a>

```go
func DisplayNameContains() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalsConfig <a name="DataDatabricksServicePrincipalsConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

&datadatabricksserviceprincipals.DataDatabricksServicePrincipalsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Api: *string,
	ApplicationIds: *[]*string,
	DisplayNameContains: *string,
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig,
	ServicePrincipals: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.api">Api</a></code> | <code>*string</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.applicationIds">ApplicationIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.servicePrincipals">ServicePrincipals</a></code> | <code>interface{}</code> | service_principals block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Api`<sup>Optional</sup> <a name="Api" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.api"></a>

```go
Api *string
```

- *Type:* *string

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#api DataDatabricksServicePrincipals#api}

---

##### `ApplicationIds`<sup>Optional</sup> <a name="ApplicationIds" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.applicationIds"></a>

```go
ApplicationIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.displayNameContains"></a>

```go
DisplayNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksServicePrincipalsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#provider_config DataDatabricksServicePrincipals#provider_config}

---

##### `ServicePrincipals`<sup>Optional</sup> <a name="ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.servicePrincipals"></a>

```go
ServicePrincipals interface{}
```

- *Type:* interface{}

service_principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#service_principals DataDatabricksServicePrincipals#service_principals}

---

### DataDatabricksServicePrincipalsProviderConfig <a name="DataDatabricksServicePrincipalsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

&datadatabricksserviceprincipals.DataDatabricksServicePrincipalsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#workspace_id DataDatabricksServicePrincipals#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#workspace_id DataDatabricksServicePrincipals#workspace_id}.

---

### DataDatabricksServicePrincipalsServicePrincipals <a name="DataDatabricksServicePrincipalsServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

&datadatabricksserviceprincipals.DataDatabricksServicePrincipalsServicePrincipals {
	AclPrincipalId: *string,
	Active: interface{},
	ApplicationId: *string,
	DisplayName: *string,
	ExternalId: *string,
	Home: *string,
	Id: *string,
	Repos: *string,
	ScimId: *string,
	SpId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.aclPrincipalId">AclPrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#acl_principal_id DataDatabricksServicePrincipals#acl_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.active">Active</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#active DataDatabricksServicePrincipals#active}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#application_id DataDatabricksServicePrincipals#application_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#display_name DataDatabricksServicePrincipals#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#external_id DataDatabricksServicePrincipals#external_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.home">Home</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#home DataDatabricksServicePrincipals#home}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.repos">Repos</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#repos DataDatabricksServicePrincipals#repos}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.scimId">ScimId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#scim_id DataDatabricksServicePrincipals#scim_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.spId">SpId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#sp_id DataDatabricksServicePrincipals#sp_id}. |

---

##### `AclPrincipalId`<sup>Optional</sup> <a name="AclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.aclPrincipalId"></a>

```go
AclPrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#acl_principal_id DataDatabricksServicePrincipals#acl_principal_id}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#active DataDatabricksServicePrincipals#active}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#application_id DataDatabricksServicePrincipals#application_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#display_name DataDatabricksServicePrincipals#display_name}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#external_id DataDatabricksServicePrincipals#external_id}.

---

##### `Home`<sup>Optional</sup> <a name="Home" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.home"></a>

```go
Home *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#home DataDatabricksServicePrincipals#home}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Repos`<sup>Optional</sup> <a name="Repos" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.repos"></a>

```go
Repos *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#repos DataDatabricksServicePrincipals#repos}.

---

##### `ScimId`<sup>Optional</sup> <a name="ScimId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.scimId"></a>

```go
ScimId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#scim_id DataDatabricksServicePrincipals#scim_id}.

---

##### `SpId`<sup>Optional</sup> <a name="SpId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.spId"></a>

```go
SpId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/service_principals#sp_id DataDatabricksServicePrincipals#sp_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalsProviderConfigOutputReference <a name="DataDatabricksServicePrincipalsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

datadatabricksserviceprincipals.NewDataDatabricksServicePrincipalsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksServicePrincipalsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksServicePrincipalsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

---


### DataDatabricksServicePrincipalsServicePrincipalsList <a name="DataDatabricksServicePrincipalsServicePrincipalsList" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

datadatabricksserviceprincipals.NewDataDatabricksServicePrincipalsServicePrincipalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksServicePrincipalsServicePrincipalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.get"></a>

```go
func Get(index *f64) DataDatabricksServicePrincipalsServicePrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksServicePrincipalsServicePrincipalsOutputReference <a name="DataDatabricksServicePrincipalsServicePrincipalsOutputReference" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipals"

datadatabricksserviceprincipals.NewDataDatabricksServicePrincipalsServicePrincipalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksServicePrincipalsServicePrincipalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetAclPrincipalId">ResetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetHome">ResetHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetRepos">ResetRepos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetScimId">ResetScimId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetSpId">ResetSpId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAclPrincipalId` <a name="ResetAclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetAclPrincipalId"></a>

```go
func ResetAclPrincipalId()
```

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetActive"></a>

```go
func ResetActive()
```

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetApplicationId"></a>

```go
func ResetApplicationId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetHome` <a name="ResetHome" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetHome"></a>

```go
func ResetHome()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetRepos` <a name="ResetRepos" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetRepos"></a>

```go
func ResetRepos()
```

##### `ResetScimId` <a name="ResetScimId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetScimId"></a>

```go
func ResetScimId()
```

##### `ResetSpId` <a name="ResetSpId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetSpId"></a>

```go
func ResetSpId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalIdInput">AclPrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.homeInput">HomeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.reposInput">ReposInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimIdInput">ScimIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spIdInput">SpIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalId">AclPrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.home">Home</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.repos">Repos</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimId">ScimId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spId">SpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AclPrincipalIdInput`<sup>Optional</sup> <a name="AclPrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalIdInput"></a>

```go
func AclPrincipalIdInput() *string
```

- *Type:* *string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `HomeInput`<sup>Optional</sup> <a name="HomeInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.homeInput"></a>

```go
func HomeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ReposInput`<sup>Optional</sup> <a name="ReposInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.reposInput"></a>

```go
func ReposInput() *string
```

- *Type:* *string

---

##### `ScimIdInput`<sup>Optional</sup> <a name="ScimIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimIdInput"></a>

```go
func ScimIdInput() *string
```

- *Type:* *string

---

##### `SpIdInput`<sup>Optional</sup> <a name="SpIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spIdInput"></a>

```go
func SpIdInput() *string
```

- *Type:* *string

---

##### `AclPrincipalId`<sup>Required</sup> <a name="AclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalId"></a>

```go
func AclPrincipalId() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Home`<sup>Required</sup> <a name="Home" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.home"></a>

```go
func Home() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repos`<sup>Required</sup> <a name="Repos" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.repos"></a>

```go
func Repos() *string
```

- *Type:* *string

---

##### `ScimId`<sup>Required</sup> <a name="ScimId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimId"></a>

```go
func ScimId() *string
```

- *Type:* *string

---

##### `SpId`<sup>Required</sup> <a name="SpId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spId"></a>

```go
func SpId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



