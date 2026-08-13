# `dataDatabricksServicePrincipalFederationPolicies` Submodule <a name="`dataDatabricksServicePrincipalFederationPolicies` Submodule" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipalFederationPolicies <a name="DataDatabricksServicePrincipalFederationPolicies" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies databricks_service_principal_federation_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

datadatabricksserviceprincipalfederationpolicies.NewDataDatabricksServicePrincipalFederationPolicies(scope Construct, id *string, config DataDatabricksServicePrincipalFederationPoliciesConfig) DataDatabricksServicePrincipalFederationPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig">DataDatabricksServicePrincipalFederationPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig">DataDatabricksServicePrincipalFederationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetPageSize"></a>

```go
func ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksServicePrincipalFederationPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

datadatabricksserviceprincipalfederationpolicies.DataDatabricksServicePrincipalFederationPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

datadatabricksserviceprincipalfederationpolicies.DataDatabricksServicePrincipalFederationPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

datadatabricksserviceprincipalfederationpolicies.DataDatabricksServicePrincipalFederationPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

datadatabricksserviceprincipalfederationpolicies.DataDatabricksServicePrincipalFederationPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksServicePrincipalFederationPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksServicePrincipalFederationPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksServicePrincipalFederationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipalFederationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList">DataDatabricksServicePrincipalFederationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.policies"></a>

```go
func Policies() DataDatabricksServicePrincipalFederationPoliciesPoliciesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList">DataDatabricksServicePrincipalFederationPoliciesPoliciesList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *f64
```

- *Type:* *f64

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalFederationPoliciesConfig <a name="DataDatabricksServicePrincipalFederationPoliciesConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

&datadatabricksserviceprincipalfederationpolicies.DataDatabricksServicePrincipalFederationPoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ServicePrincipalId: *f64,
	PageSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#page_size DataDatabricksServicePrincipalFederationPolicies#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.servicePrincipalId"></a>

```go
ServicePrincipalId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#page_size DataDatabricksServicePrincipalFederationPolicies#page_size}.

---

### DataDatabricksServicePrincipalFederationPoliciesPolicies <a name="DataDatabricksServicePrincipalFederationPoliciesPolicies" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

&datadatabricksserviceprincipalfederationpolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies {
	PolicyId: *string,
	ServicePrincipalId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#policy_id DataDatabricksServicePrincipalFederationPolicies#policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}. |

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#policy_id DataDatabricksServicePrincipalFederationPolicies#policy_id}.

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.servicePrincipalId"></a>

```go
ServicePrincipalId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}.

---

### DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

&datadatabricksserviceprincipalfederationpolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy {
	Audiences: *[]*string,
	Issuer: *string,
	JwksJson: *string,
	JwksUri: *string,
	Subject: *string,
	SubjectClaim: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.audiences">Audiences</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#audiences DataDatabricksServicePrincipalFederationPolicies#audiences}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#issuer DataDatabricksServicePrincipalFederationPolicies#issuer}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksJson">JwksJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#jwks_json DataDatabricksServicePrincipalFederationPolicies#jwks_json}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksUri">JwksUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#jwks_uri DataDatabricksServicePrincipalFederationPolicies#jwks_uri}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subject">Subject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#subject DataDatabricksServicePrincipalFederationPolicies#subject}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subjectClaim">SubjectClaim</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#subject_claim DataDatabricksServicePrincipalFederationPolicies#subject_claim}. |

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.audiences"></a>

```go
Audiences *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#audiences DataDatabricksServicePrincipalFederationPolicies#audiences}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#issuer DataDatabricksServicePrincipalFederationPolicies#issuer}.

---

##### `JwksJson`<sup>Optional</sup> <a name="JwksJson" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksJson"></a>

```go
JwksJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#jwks_json DataDatabricksServicePrincipalFederationPolicies#jwks_json}.

---

##### `JwksUri`<sup>Optional</sup> <a name="JwksUri" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksUri"></a>

```go
JwksUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#jwks_uri DataDatabricksServicePrincipalFederationPolicies#jwks_uri}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subject"></a>

```go
Subject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#subject DataDatabricksServicePrincipalFederationPolicies#subject}.

---

##### `SubjectClaim`<sup>Optional</sup> <a name="SubjectClaim" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subjectClaim"></a>

```go
SubjectClaim *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/service_principal_federation_policies#subject_claim DataDatabricksServicePrincipalFederationPolicies#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalFederationPoliciesPoliciesList <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesList" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

datadatabricksserviceprincipalfederationpolicies.NewDataDatabricksServicePrincipalFederationPoliciesPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksServicePrincipalFederationPoliciesPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get"></a>

```go
func Get(index *f64) DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

datadatabricksserviceprincipalfederationpolicies.NewDataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksJson">ResetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksUri">ResetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubjectClaim">ResetSubjectClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences"></a>

```go
func ResetAudiences()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetJwksJson` <a name="ResetJwksJson" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksJson"></a>

```go
func ResetJwksJson()
```

##### `ResetJwksUri` <a name="ResetJwksUri" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksUri"></a>

```go
func ResetJwksUri()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubject"></a>

```go
func ResetSubject()
```

##### `ResetSubjectClaim` <a name="ResetSubjectClaim" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubjectClaim"></a>

```go
func ResetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJsonInput">JwksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUriInput">JwksUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput">SubjectClaimInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput">SubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences">Audiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJson">JwksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUri">JwksUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim">SubjectClaim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput"></a>

```go
func AudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `JwksJsonInput`<sup>Optional</sup> <a name="JwksJsonInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJsonInput"></a>

```go
func JwksJsonInput() *string
```

- *Type:* *string

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUriInput"></a>

```go
func JwksUriInput() *string
```

- *Type:* *string

---

##### `SubjectClaimInput`<sup>Optional</sup> <a name="SubjectClaimInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput"></a>

```go
func SubjectClaimInput() *string
```

- *Type:* *string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput"></a>

```go
func SubjectInput() *string
```

- *Type:* *string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences"></a>

```go
func Audiences() *[]*string
```

- *Type:* *[]*string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJson"></a>

```go
func JwksJson() *string
```

- *Type:* *string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUri"></a>

```go
func JwksUri() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim"></a>

```go
func SubjectClaim() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>

---


### DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksserviceprincipalfederationpolicies"

datadatabricksserviceprincipalfederationpolicies.NewDataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OidcPolicy`<sup>Required</sup> <a name="OidcPolicy" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicy"></a>

```go
func OidcPolicy() DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *f64
```

- *Type:* *f64

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksServicePrincipalFederationPoliciesPolicies
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a>

---



